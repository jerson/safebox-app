import React from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
  ScrollView,
  StatusBar
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Colors from '../../modules/constants/Colors';

import Container from '../../components/ui/Container';
import Content from '../../components/ui/Content';
import Size from '../../modules/dimensions/Size';
import { AccountSingle } from '../../proto/services_pb';
import { useNavigationParam } from 'react-navigation-hooks';
import Text from '../../components/ui/Text';

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
            <View style={styles.form}>
              <Text>{account.getId()}</Text>
            </View>
          </Content>
        </SafeAreaView>
      </ScrollView>
    </Container>
  );
}

AccountScreen.navigationOptions = () => ({
  title: 'Sample'
});

export default AccountScreen;
