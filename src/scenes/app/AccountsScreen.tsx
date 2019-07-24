import React from 'react';
import { SafeAreaView, StyleSheet, View, ViewStyle } from 'react-native';
import Colors from '../../modules/constants/Colors';
import Text from '../../components/ui/Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey1,
    flex: 1
  } as ViewStyle
});

function AccountsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>sample</Text>
      </View>
    </SafeAreaView>
  );
}

AccountsScreen.navigationOptions = {
  title: 'Tus cuentas'
};

export default AccountsScreen;
