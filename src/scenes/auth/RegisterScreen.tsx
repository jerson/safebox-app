import React from 'react';
import { SafeAreaView, StyleSheet, View, ViewStyle } from 'react-native';
import Colors from '../../modules/constants/Colors';
import { NavigationScreenComponent } from 'react-navigation';
import Text from '../../components/ui/Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey1,
    flex: 1
  } as ViewStyle
});

const RegisterScreen: React.FC & NavigationScreenComponent<any> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>sample</Text>
      </View>
    </SafeAreaView>
  );
};

RegisterScreen.navigationOptions = {
  title: 'Create una cuenta ahora'
};

export default RegisterScreen;