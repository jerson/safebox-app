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

const LoginScreen: React.FC & NavigationScreenComponent<any> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text weight={'Bold'} size={30}>
          sample
        </Text>
      </View>
    </SafeAreaView>
  );
};

LoginScreen.navigationOptions = {
  headerLeft: null,
  title: 'Inicia sesión'
};

export default LoginScreen;
