import React, { useState, useEffect } from 'react';
import { StyleSheet, ViewStyle, StatusBar, RefreshControl } from 'react-native';
import { NavigationScreenProp, FlatList } from 'react-navigation';
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
import EmptyAccounts from '../../components/help/EmptyAccounts';
import useFocusedScreen from '../../components/hooks/useFocusedScreen';
import AccountItem from '../../components/account/AccountItem';
import Timeout from '../../components/session/Timeout';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey1
  } as ViewStyle,
  flatList: {
    flex: 1
  } as ViewStyle,
  alertMessage: {
    marginHorizontal: 20,
    marginTop: 20
  } as ViewStyle,
  timeout: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0
  } as ViewStyle
});

interface Params {}
interface Props {
  navigation: NavigationScreenProp<Params>;
}

function AccountsScreen({ navigation }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useAnimatedState('');
  const [accounts, setAccounts] = useAnimatedState<AccountSingle[]>([]);

  const [focused] = useFocusedScreen(navigation);

  const onRefresh = async () => {
    setRefreshing(true);
    await load();
    setRefreshing(false);
  };
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

  useEffect(() => {
    if (focused) {
      load();
    }
  }, [focused]);

  return (
    <Container style={styles.container}>
      <StatusBar
        animated
        barStyle={'dark-content'}
        backgroundColor={Colors.grey2}
      />

      {!isLoading && !!error && (
        <AlertMessage style={styles.alertMessage} message={error} />
      )}
      <Timeout style={styles.timeout} />
      {isLoading && <Loading margin={'large'} />}
      {!isLoading && (
        <FlatList
          refreshControl={
            <RefreshControl
              colors={[Colors.primary]}
              tintColor={Colors.primary}
              onRefresh={onRefresh}
              refreshing={refreshing}
            />
          }
          style={styles.flatList}
          contentContainerStyle={{
            minHeight: Size.getVisibleTabScreenHeight(),
            paddingTop: 80
          }}
          renderItem={({ item }) => {
            return <AccountItem item={item} />;
          }}
          data={accounts}
          keyExtractor={item => {
            return item.getId().toString();
          }}
          ListEmptyComponent={() => {
            return (
              <Content center>
                <EmptyAccounts />
              </Content>
            );
          }}
        />
      )}
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
