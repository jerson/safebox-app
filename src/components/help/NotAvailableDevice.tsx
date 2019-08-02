import React from 'react';
import { StyleSheet, ViewStyle, View } from 'react-native';
import Text from '../ui/Text';
import Colors from '../../modules/constants/Colors';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: Colors.grey2
  } as ViewStyle,
  notFoundDescription: {
    color: Colors.grey6,
    fontSize: 13
  }
});

function NotAvailableDevice() {
  return (
    <View style={styles.container}>
      <Text style={styles.notFoundDescription}>
        your device does not have any supported method, try another device.
      </Text>
    </View>
  );
}

export default NotAvailableDevice;
