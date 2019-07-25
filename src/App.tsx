import React, { Fragment } from 'react';
import { StatusBar, Platform, UIManager } from 'react-native';
import MainNavigator from './router';
import Colors from './modules/constants/Colors';
const tinyColor = require('tinycolor2');

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

function App() {
  const statusBarColor = tinyColor(Colors.primary).darken(5);
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

export default App;
