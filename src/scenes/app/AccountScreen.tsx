import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
  ScrollView,
  StatusBar
} from 'react-native';
import { SafeAreaView, HeaderProps } from 'react-navigation';
import Colors from '../../modules/constants/Colors';

import Container from '../../components/ui/Container';
import Content from '../../components/ui/Content';
import Size from '../../modules/dimensions/Size';
import { AccountSingle } from '../../proto/services_pb';
import { useNavigationParam } from 'react-navigation-hooks';
import Text from '../../components/ui/Text';
import Header from '../../components/account/Header';
import useIconTintLabel from '../../components/hooks/useIconTintLabel';
import Session from '../../services/Session';

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
  const account = useNavigationParam('account') as AccountSingle;
  const [hasPassword] = useState(!!Session.getPassword());

  return (
    <Container style={styles.container}>
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
  }
});

export default AccountScreen;
