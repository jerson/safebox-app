import React, { Fragment, useEffect } from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';

import { ServicesClient } from './proto/services_pb_service';
import { PingRequest } from './proto/services_pb';

const client = new ServicesClient('https://safebox.jerson.dev');
const App = () => {
  useEffect(() => {
    const req = new PingRequest();
    client.ping(req, (err, user) => {
      console.log(err, user);
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
