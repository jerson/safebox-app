import React, { Fragment, useEffect } from 'react';
import { StatusBar, Platform, UIManager } from 'react-native';
import MainNavigator from './router';
import Colors from './modules/constants/Colors';
const tinyColor = require('tinycolor2');
import codePush from 'react-native-code-push';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}
const codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };

function App() {
  const statusBarColor = tinyColor(Colors.primary).darken(5);

  useEffect(() => {
    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE
    });
  }, []);

  return (
    <Fragment>
      <StatusBar
        animated
        barStyle={'light-content'}
        backgroundColor={statusBarColor}
      />
      <MainNavigator />
    </Fragment>
  );
}

export default codePush(codePushOptions)(App);
