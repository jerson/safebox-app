import React, { Fragment, useEffect } from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';

const App: React.FC = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView></SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default App;
