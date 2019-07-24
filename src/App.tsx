import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';
import MainNavigator from './router';
import Colors from './modules/constants/Colors';
const tinyColor = require('tinycolor2');

const App: React.FC = () => {
  const statusBarColor = tinyColor(Colors.primary).darken(5);
  return (
    <Fragment>
      <StatusBar barStyle="light-content" backgroundColor={statusBarColor} />
      <MainNavigator />
    </Fragment>
  );
};

export default App;
