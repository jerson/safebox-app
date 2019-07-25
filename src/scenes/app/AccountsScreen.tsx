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
import Text from '../../components/ui/Text';
import EmptyAccounts from '../../components/help/EmptyAccounts';
import useFocusedScreen from '../../components/hooks/useFocusedScreen';

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
            minHeight: Size.getVisibleTabScreenHeight()
          }}
          renderItem={({ item }) => {
            return <Text>{item.getHint()}</Text>;
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
