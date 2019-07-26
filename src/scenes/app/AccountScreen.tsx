import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
  ScrollView,
  StatusBar,
  Alert
} from 'react-native';
import { SafeAreaView, HeaderProps } from 'react-navigation';
import Colors from '../../modules/constants/Colors';

import Container from '../../components/ui/Container';
import Content from '../../components/ui/Content';
import Size from '../../modules/dimensions/Size';
import { AccountSingle, DeleteAccountRequest } from '../../proto/services_pb';
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
  form: {
    width: 280,
    marginBottom: 60,
    alignSelf: 'center'
  } as ViewStyle
});

function AccountScreen() {
  const { setParams, goBack } = useNavigation();
  const account = useNavigationParam('account') as AccountSingle;
  const showDelete = useNavigationParam('showDelete') as boolean;

  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useAnimatedState('');

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
      { cancelable: false }
    );
  }, [showDelete]);

  const [hasPassword] = useState(!!Session.getPassword());

  return (
    <Container style={styles.container}>
      <LoadingOverlay isLoading={isDeleting} />
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
            {hasPassword && (
              <View style={styles.form}>
                <Text>{account.getId()}dd</Text>
              </View>
            )}
            {!hasPassword && (
              <View style={styles.form}>
                <Text>insert admin pass</Text>
              </View>
            )}
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
