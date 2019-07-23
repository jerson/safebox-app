import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ViewStyle } from 'react-native';
import Colors from '../../modules/constants/Colors';
import { NavigationScreenComponent } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey1,
    flex: 1
  } as ViewStyle
});

const LoginScreen: React.FC & NavigationScreenComponent<any> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>sample</Text>
      </View>
    </SafeAreaView>
  );
};

LoginScreen.navigationOptions = {
  title: 'Inicia sesión'
};

export default LoginScreen;
