import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  ViewStyle,
  ScrollView,
  StatusBar,
  View
} from 'react-native';
import { SafeAreaView, NavigationScreenProp } from 'react-navigation';
import Colors from '../../modules/constants/Colors';
import Container from '../../components/ui/Container';
import Content from '../../components/ui/Content';
import Size from '../../modules/dimensions/Size';
import { AccountSingle } from '../../proto/services_pb';

import useAnimatedState from '../../components/hooks/useAnimatedState';
import HeaderIcon from '../../components/navigation/HeaderIcon';
import Client from '../../services/Client';
import Strings from '../../modules/format/Strings';
import Loading from '../../components/ui/Loading';
import AlertMessage from '../../components/ui/AlertMessage';
import Text from '../../components/ui/Text';
import EmptyAccounts from '../../components/help/EmptyAccounts';

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

interface Params {}
interface Props {
  navigation: NavigationScreenProp<Params>;
}

function AccountsScreen({ navigation }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useAnimatedState('');
  const [accounts, setAccounts] = useState<AccountSingle[]>([]);

  const load = async () => {
    try {
      const response = await Client.getAccounts();
      setAccounts(response.getAccountsList());
    } catch (e) {
      const message = Strings.getError(e);
      setError(message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    load();
  }, []);

  // const hasAccounts = accounts.length >1
  const hasAccounts = false;
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
          <Content center={!hasAccounts}>
            {isLoading && <Loading margin={'large'} />}
            {!isLoading && (
              <View style={styles.form}>
                {!!error && <AlertMessage message={error} />}
                {hasAccounts && (
                  <View>
                    {accounts.map(account => {
                      return (
                        <Text key={account.getId()}>{account.getHint()}</Text>
                      );
                    })}
                  </View>
                )}
                {!hasAccounts && <EmptyAccounts navigation={navigation} />}
              </View>
            )}
          </Content>
        </SafeAreaView>
      </ScrollView>
    </Container>
  );
}

AccountsScreen.navigationOptions = ({ navigation }: Props) => ({
  title: 'SafeBox',
  headerLeft: null,
  headerRight: (
    <HeaderIcon
      name={'plus-circle'}
      style={{ color: Colors.primaryLight }}
      onPress={() => {
        navigation.navigate('AddAccount');
      }}
    />
  )
});

export default AccountsScreen;
