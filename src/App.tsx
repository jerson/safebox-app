import React, { Fragment, useEffect } from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({});

const App: React.FC = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
    </Fragment>
  );
};

export default App;
