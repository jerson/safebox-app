import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
  ScrollView,
  StatusBar,
  Alert,
  TextStyle,
  Clipboard
} from 'react-native';
import { SafeAreaView, HeaderProps } from 'react-navigation';
import Colors from '../../modules/constants/Colors';

import Container from '../../components/ui/Container';
import Content from '../../components/ui/Content';
import Size from '../../modules/dimensions/Size';
import {
  AccountSingle,
  DeleteAccountRequest,
  AccountRequest,
  Account
} from '../../proto/services_pb';
import { useNavigationParam, useNavigation } from 'react-navigation-hooks';
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey1
  } as ViewStyle,
  scrollView: {
    flex: 1
  } as ViewStyle,
  safeArea: {
    flex: 1
  } as ViewStyle,
  textInput: {} as ViewStyle,
  textInputContainer: {
    flex: 1,
    marginBottom: 0,
    marginRight: 60
  } as ViewStyle,
  icon: {
    fontSize: 40,
    alignSelf: 'center',
    marginBottom: 10,
    color: Colors.primaryLight
  } as ViewStyle,
  shadow: {
    shadowOpacity: 0.1,
    shadowRadius: 16,
    shadowColor: Colors.grey6,
    shadowOffset: { height: 4, width: 0 },
    elevation: 4
  } as ViewStyle,
  content: {
    padding: 20,
    margin: 20,
    marginBottom: 60,
    maxWidth: 280,
    backgroundColor: Colors.white,
    borderRadius: 12,
    overflow: 'visible'
  } as ViewStyle,
  help: {
    marginTop: 5,
    fontSize: 13,
    color: Colors.grey6
  } as TextStyle,
  helpHint: {
    color: Colors.grey5
  } as TextStyle,
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  } as ViewStyle,
  buttonCopy: {
    height: 50,
    width: 50,
    paddingTop: 14,
    paddingLeft: 15,
    borderRadius: 25
  } as ViewStyle,
  description: {
    fontSize: 13,
    color: Colors.grey5,
    marginBottom: 10,
    textAlign: 'center'
  } as TextStyle,
  iconCopy: {
    color: Colors.primaryLight,
    fontSize: 15,
    marginHorizontal: 2
  }
});

const decode = (input: string) => {
  return OpenPGP.decrypt(input, Session.getPrivateKey(), Session.getPassword());
};

function AccountScreen() {
  const { setParams, goBack } = useNavigation();
  const account = useNavigationParam('account') as AccountSingle;
  const showDelete = useNavigationParam('showDelete') as boolean;

  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useAnimatedState('');
  const [toast, setToast] = useAnimatedState('');
  const [locked, setLocked] = useState(!Session.getPassword());

  const [accountDecoded, setAccountDecoded] = useState<Account>();
  const [isLoading, setIsLoading] = useState(false);

  const onUnlock = (password: string) => {
    setError('');
    Session.setPassword(password);
    setLocked(false);
  };

  useEffect(() => {
    if (locked) {
      return;
    }
    loadPassword();
  }, [locked]);

  const loadPassword = async () => {
    setIsLoading(true);
    try {
      const request = new AccountRequest();
      request.setId(account.getId());
      const response = await Client.getAccount(request);
      const responseAccount = response.getAccount();
      if (responseAccount) {
        const accountDecoded = new Account();
        accountDecoded.setPassword(await decode(responseAccount.getPassword()));
        setAccountDecoded(accountDecoded);
      }
    } catch (e) {
      const message = Strings.getError(e);
      setError(message);
      setLocked(true);
    }
    setIsLoading(false);
  };

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
            setParams({ showDelete: false });
          }
        },
        {
          text: 'Cancel',
          onPress: () => {
            setParams({ showDelete: false });
          },
          style: 'cancel'
        }
      ],
      { cancelable: true }
    );
  }, [showDelete]);

  return (
    <Container style={styles.container}>
      <LoadingOverlay isLoading={isDeleting || isLoading} />
      <StatusBar
        animated
        barStyle={'dark-content'}
        backgroundColor={Colors.grey2}
      />
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={{
          minHeight: Size.getVisibleTabScreenHeight()
        }}
        style={styles.scrollView}
      >
        <SafeAreaView style={styles.safeArea}>
          <Content center>
            {!!error && <AlertMessage message={error} />}
            {!locked && accountDecoded && (
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
                <View style={styles.item}>
                  <TextInput
                    label={'Password'}
                    icon={'lock'}
                    editable={false}
                    secureTextEntry
                    multiline
                    value={accountDecoded.getPassword()}
                    containerStyle={styles.textInputContainer}
                    style={styles.textInput}
                    help={
                      !!account.getHint() && (
                        <Text style={styles.help}>
                          <Text style={styles.helpHint}>Hint:</Text>{' '}
                          {account.getHint()}
                        </Text>
                      )
                    }
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
              </View>
            )}
            {locked && <Locked onUnlock={onUnlock} />}
          </Content>
        </SafeAreaView>
      </ScrollView>
    </Container>
  );
}

AccountScreen.navigationOptions = ({ navigation }: any) => ({
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
        navigation.setParams({ showDelete: true });
      }}
    />
  )
});

export default AccountScreen;
