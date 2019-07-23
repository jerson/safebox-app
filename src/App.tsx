import React, { Fragment, useEffect } from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { ServicesClient } from './proto/ServicesServiceClientPb';
import { PingRequest } from './proto/services_pb';

const client = new ServicesClient('http://192.168.1.109:8000');
const App: React.FC = () => {
  useEffect(() => {
    client.ping(new PingRequest(), null, (err, response) => {
      console.log(err);
      console.log(response);
    });
  }, []);
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView></SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default App;
