import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ViewStyle,
  Image,
  ImageStyle,
  StatusBar
} from 'react-native';
import Colors from '../../modules/constants/Colors';
import { NavigationScreenComponent } from 'react-navigation';
import Text from '../../components/ui/Text';
import HeaderLanding from '../../components/ui/HeaderLanding';
import Font from '../../modules/resources/Font';
import { TextInput } from 'react-native-gesture-handler';
const tinyColor = require('tinycolor2');

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey1,
    flex: 1
  } as ViewStyle
});

const LoginScreen: React.FC & NavigationScreenComponent<any> = () => {
  const statusBarColor = tinyColor(Colors.primary).darken(5);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={statusBarColor} />
      <HeaderLanding />
      <View style={{ paddingTop: 60, alignItems: 'center' }}>
        <Text weight={'Light'} size={30}>
          Iniciar sesión
        </Text>

        <TextInput />
        <TextInput />
      </View>
    </SafeAreaView>
  );
};

LoginScreen.navigationOptions = {
  headerLeft: null,
  headerRight: null,
  title: null
};

export default LoginScreen;
