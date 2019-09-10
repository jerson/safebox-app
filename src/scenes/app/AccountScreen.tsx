import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
  ScrollView,
  StatusBar,
  Alert,
  TextStyle,
  Clipboard,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import Colors from '../../modules/constants/Colors';

import Container from '../../components/ui/Container';
import Content from '../../components/ui/Content';
import Size from '../../modules/dimensions/Size';
import {
  AccountSingle,
  DeleteAccountRequest,
  AccountRequest,
  Account,
  HasProductRequest,
} from '../../proto/services_pb';
import {useNavigationParam, useNavigation} from 'react-navigation-hooks';
import Text from '../../components/ui/Text';
import Header from '../../components/account/Header';
import useIconTintLabel from '../../components/hooks/useIconTintLabel';
import Session from '../../services/Session';
import HeaderIcon from '../../components/navigation/HeaderIcon';
import LoadingOverlay from '../../components/ui/LoadingOverlay';
import Client from '../../services/Client';
import AlertMessage from '../../components/ui/AlertMessage';
import useAnimatedState from '../../components/hooks/useAnimatedState';
import Strings from '../../modules/format/Strings';
import Locked from '../../components/account/Locked';
import OpenPGP from 'react-native-fast-openpgp';
import TextInput from '../../components/ui/TextInput';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../components/ui/Button';
import Log from '../../modules/log/Log';
import useFocusedScreen from '../../components/hooks/useFocusedScreen';
import Biometrics from 'react-native-biometrics';
import Config from '../../Config';
import SettingsStorage from '../../modules/storage/SettingsStorage';
import {HeaderProps} from 'react-navigation-stack/lib/typescript/types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey1,
  } as ViewStyle,
  scrollView: {
    flex: 1,
  } as ViewStyle,
  safeArea: {
    flex: 1,
  } as ViewStyle,
  textInput: {} as ViewStyle,
  textInputContainer: {
    flex: 1,
    marginBottom: 0,
    marginRight: 60,
  } as ViewStyle,
  icon: {
    fontSize: 40,
    alignSelf: 'center',
    marginBottom: 10,
    color: Colors.primaryLight,
  } as ViewStyle,
  shadow: {
    shadowOpacity: 0.1,
    shadowRadius: 16,
    shadowColor: Colors.grey6,
    shadowOffset: {height: 4, width: 0},
    elevation: 4,
  } as ViewStyle,
  content: {
    padding: 20,
    maxWidth: 360,
    marginBottom: 60,
    marginTop: 10,
    backgroundColor: Colors.white,
    borderRadius: 12,
    overflow: 'visible',
    alignSelf: 'center',
  } as ViewStyle,
  help: {
    marginTop: 5,
    fontSize: 13,
    color: Colors.grey6,
  } as TextStyle,
  helpHint: {
    color: Colors.grey5,
  } as TextStyle,
  item: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
  } as ViewStyle,
  premium: {
    alignItems: 'center',
    marginTop: 20,
  } as ViewStyle,

  buttonShowPassword: {
    marginBottom: 5,
    minWidth: 240,
  } as ViewStyle,
  buttonCopy: {
    height: 50,
    width: 50,
    paddingTop: 14,
    paddingLeft: 15,
    borderRadius: 25,
  } as ViewStyle,
  description: {
    fontSize: 13,
    color: Colors.grey5,
    marginBottom: 10,
    textAlign: 'center',
  } as TextStyle,
  iconCopy: {
    color: Colors.primaryLight,
    fontSize: 15,
    marginHorizontal: 2,
  } as TextStyle,
  noPremiumDescription: {
    color: Colors.grey5,
    textAlign: 'center',
  } as TextStyle,
  noPremium: {
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: Colors.grey2,
  } as ViewStyle,
  center: {
    alignItems: 'center',
  } as ViewStyle,
});

const decode = async (input: string) => {
  try {
    return await OpenPGP.decrypt(
      input,
      Session.getPrivateKey(),
      Session.getPassword(),
    );
  } catch (e) {
    Log.warn(TAG, 'decode', e);
    throw new Error('invalid password');
  }
};

const TAG = '[AccountScreen]';
function AccountScreen() {
  const {setParams, goBack, navigate} = useNavigation();
  const account = useNavigationParam('account') as AccountSingle;
  const showDelete = useNavigationParam('showDelete') as boolean;

  const [isDeleting, setIsDeleting] = useState(false);
  const [allowShowPassword, setAllowShowPassword] = useAnimatedState(false);

  const [error, setError] = useAnimatedState('');
  const [toast, setToast] = useAnimatedState('');
  const [showUnlockModal, setShowUnlockModal] = useState(false);

  const [accountDecoded, setAccountDecoded] = useState<Account>();
  const [isLoading, setIsLoading] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  const navigation = useNavigation();
  const [focused] = useFocusedScreen(navigation);

  let timeoutPassword: any;

  const checkPurchase = async () => {
    try {
      const request = new HasProductRequest();
      request.setSlug('showpass');
      const response = await Client.hasProduct(request);
      setAllowShowPassword(response.getPurchased());
    } catch (e) {
      Log.warn(TAG, 'checkPurchase', e);
    }
    setIsChecking(false);
  };

  useEffect(() => {
    focused && checkPurchase();
  }, [focused]);

  const onUnlock = (password: string) => {
    Session.setPassword(password);
    setShowUnlockModal(false);
    unlockPassword();
  };

  const unlockPassword = () => {
    setIsLoading(true);
    requestAnimationFrame(() => {
      loadPassword();
    });
  };

  const tryShowPassword = async () => {
    const callback = () => {
      if (!!Session.getPassword()) {
        unlockPassword();
      } else {
        setShowUnlockModal(true);
      }
    };

    try {
      const settings = await SettingsStorage.getFirst();
      if (!settings.biometricPublicKey) {
        callback();
        return;
      }

      const success = await Biometrics.simplePrompt('Confirm');
      if (success) {
        callback();
      }
    } catch (e) {
      const message = Strings.getError(e);
      setError(message);
    }
  };

  const startTimeoutPassword = () => {
    timeoutPassword && clearTimeout(timeoutPassword);
    timeoutPassword = setTimeout(() => {
      setAccountDecoded(undefined);
    }, Config.settings.timeoutPassword);
  };

  const loadPassword = async () => {
    setError('');

    try {
      const request = new AccountRequest();
      request.setId(account.getId());
      const response = await Client.getAccount(request);
      const responseAccount = response.getAccount();
      if (responseAccount) {
        const accountDecoded = new Account();
        accountDecoded.setPassword(await decode(responseAccount.getPassword()));
        setAccountDecoded(accountDecoded);
        startTimeoutPassword();
      }
    } catch (e) {
      const message = Strings.getError(e);
      setError(message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    return () => {
      timeoutPassword && clearTimeout(timeoutPassword);
    };
  }, []);

  const deleteAccount = async () => {
    setIsDeleting(true);
    try {
      const request = new DeleteAccountRequest();
      request.setId(account.getId());
      await Client.deleteAccount(request);
      goBack();
    } catch (e) {
      const message = Strings.getError(e);
      setError(message);
    }
    setIsDeleting(false);
  };

  useEffect(() => {
    if (!showDelete) {
      return;
    }
    Alert.alert(
      'Delete secret account',
      'Are you sure?',
      [
        {
          text: 'Delete',
          onPress: () => {
            deleteAccount();
            setParams({showDelete: false});
          },
        },
        {
          text: 'Cancel',
          onPress: () => {
            setParams({showDelete: false});
          },
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {
          setParams({showDelete: false});
        },
      },
    );
  }, [showDelete]);

  const goToPremium = () => {
    navigate('Premium');
  };

  const hint = !!account.getHint() ? (
    <Text style={styles.help}>
      <Text style={styles.helpHint}>Hint:</Text> {account.getHint()}
    </Text>
  ) : null;

  return (
    <Container style={styles.container}>
      <LoadingOverlay isLoading={isDeleting} />
      <StatusBar
        animated
        barStyle={'dark-content'}
        backgroundColor={Colors.grey2}
      />
      <Locked visible={showUnlockModal} onUnlock={onUnlock} />
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={{
          minHeight: Size.getVisibleTabScreenHeight(),
        }}
        style={styles.scrollView}>
        <SafeAreaView style={styles.safeArea}>
          <Content center>
            {!!error && (
              <AlertMessage
                onTimeout={() => {
                  setError('');
                }}
                message={error}
              />
            )}

            <View style={[styles.content, styles.shadow]}>
              <Icon name={'unlock'} style={styles.icon} />
              <Text style={styles.description}>
                Use <Icon style={styles.iconCopy} name={'copy'} /> to copy to
                clipboard
              </Text>
              {!!toast && (
                <AlertMessage
                  color={Colors.accentDark}
                  timeout={2000}
                  icon={'copy'}
                  onTimeout={() => setToast('')}
                  message={toast}
                />
              )}
              <View style={styles.item}>
                <TextInput
                  label={'Username'}
                  icon={'user'}
                  editable={false}
                  multiline
                  value={account.getUsername()}
                  containerStyle={styles.textInputContainer}
                  style={styles.textInput}
                  rightContainer={
                    <Button
                      typeColor={'primaryLight'}
                      onPress={() => {
                        Clipboard.setString(account.getUsername());
                        setToast('Username copied to clipboard');
                      }}
                      style={styles.buttonCopy}
                      icon={'copy'}
                    />
                  }
                />
              </View>
              {!!accountDecoded && (
                <View style={styles.item}>
                  <TextInput
                    label={'Password'}
                    icon={'lock'}
                    editable={false}
                    multiline
                    value={accountDecoded.getPassword()}
                    containerStyle={styles.textInputContainer}
                    style={styles.textInput}
                    help={hint}
                    rightContainer={
                      <Button
                        typeColor={'primaryLight'}
                        onPress={() => {
                          Clipboard.setString(accountDecoded.getPassword());
                          setToast('Password copied to clipboard');
                        }}
                        style={styles.buttonCopy}
                        icon={'copy'}
                      />
                    }
                  />
                </View>
              )}
              {!isChecking && !accountDecoded && (
                <>
                  {allowShowPassword && (
                    <View style={styles.premium}>
                      <Button
                        icon={'eye'}
                        typeColor={'primaryLight'}
                        onPress={tryShowPassword}
                        isLoading={isLoading}
                        style={styles.buttonShowPassword}
                        title={'Show account password'}
                      />
                      {hint}
                    </View>
                  )}
                  {!allowShowPassword && (
                    <View>
                      <View style={styles.noPremium}>
                        <Text style={styles.noPremiumDescription}>
                          Do you want to see your password?{'\n'}
                          <Text
                            onPress={goToPremium}
                            style={{color: Colors.primaryLight}}>
                            Buy Premium
                          </Text>
                        </Text>
                      </View>
                      <View style={styles.center}>{hint}</View>
                    </View>
                  )}
                </>
              )}
            </View>
          </Content>
        </SafeAreaView>
      </ScrollView>
    </Container>
  );
}

AccountScreen.navigationOptions = ({navigation}: any) => ({
  header: (props: HeaderProps) => {
    const account = navigation.getParam('account');
    const label = useIconTintLabel(account.getLabel());
    return (
      <Header
        title={account.getLabel()}
        tintColor={label.tintColor}
        icon={label.icon}
        {...props}
      />
    );
  },
  headerRight: (
    <HeaderIcon
      name={'trash-2'}
      onPress={() => {
        navigation.setParams({showDelete: true});
      }}
    />
  ),
});

export default AccountScreen;
