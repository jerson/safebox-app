import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';
import MainNavigator from './router';

const App: React.FC = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <MainNavigator />
    </Fragment>
  );
};

export default App;
