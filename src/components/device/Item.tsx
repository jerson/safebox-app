import React, { useState } from 'react';
import { StyleSheet, View, Alert, ViewStyle, TextStyle } from 'react-native';
import Text from '../ui/Text';
import { Device, DeleteDeviceRequest } from '../../proto/services_pb';
import Button from '../ui/Button';
import Client from '../../services/Client';
import Strings from '../../modules/format/Strings';
import Colors from '../../modules/constants/Colors';
import Biometrics from 'react-native-biometrics';
import SettingsStorage from '../../modules/storage/SettingsStorage';
import AppStorage from '../../modules/storage/AppStorage';
const moment = require('moment');

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.white,
    marginTop: 10,
    borderRadius: 10,
    borderColor: Colors.grey3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center'
  } as ViewStyle,
  info: {
    flex: 1,
    paddingRight: 10
  } as ViewStyle,
  button: {
    paddingTop: 6,
    paddingLeft: 14
  } as ViewStyle,
  uid: {
    fontSize: 12,
    color: Colors.grey5
  } as TextStyle,
  date: {
    fontSize: 13,
    color: Colors.grey6
  } as TextStyle,
  isSame: {
    color: Colors.primaryLight
  } as TextStyle
});

export interface ItemProps {
  item: Device;
  isSame?: boolean;
  onDelete?: () => void;
}

function Item({ item, isSame, onDelete }: ItemProps) {
  const [isLoading, setIsLoading] = useState(false);

  const deletePublicKey = async () => {
    const settings = await SettingsStorage.getFirst();
    AppStorage.write(() => {
      settings.biometricPublicKey = '';
    });
  };

  const deleteDevice = async () => {
    setIsLoading(true);
    try {
      const request = new DeleteDeviceRequest();
      request.setId(item.getId());
      await Client.deleteDevice(request);
      typeof onDelete === 'function' && onDelete();
      if (isSame) {
        Biometrics.deleteKeys();
        deletePublicKey();
      }
    } catch (e) {
      const message = Strings.getError(e);
      Alert.alert(message);
    }
    setIsLoading(false);
  };

  const tryDelete = () => {
    Alert.alert(
      'Delete',
      'Are you sure?',
      [
        {
          text: 'Yes, Delete',
          onPress: () => {
            deleteDevice();
          }
        },
        {
          text: 'Cancel',
          style: 'cancel'
        }
      ],
      {
        cancelable: true
      }
    );
  };

  const date = moment(item.getDatecreated()).fromNow();
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text numberOfLines={1} style={styles.uid}>
          {isSame && (
            <Text weight={'SemiBold'} style={styles.isSame}>
              (this device){' '}
            </Text>
          )}
          {item.getUid()}
        </Text>
        <Text numberOfLines={1} style={styles.date}>
          Added {date}
        </Text>
      </View>
      <Button
        typeColor={'accentDark'}
        icon={'trash'}
        isLoading={isLoading}
        onPress={tryDelete}
        style={styles.button}
      />
    </View>
  );
}

export default Item;
