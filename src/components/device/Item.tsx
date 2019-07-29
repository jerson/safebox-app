import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import Text from '../ui/Text';
import { Device, DeleteDeviceRequest } from '../../proto/services_pb';
import Button from '../ui/Button';
import Client from '../../services/Client';
import Strings from '../../modules/format/Strings';
import Colors from '../../modules/constants/Colors';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: Colors.white,
    marginBottom: 5
  }
});

export interface ItemProps {
  item: Device;
  onDelete?: () => void;
}

function Item({ item, onDelete }: ItemProps) {
  const [isLoading, setIsLoading] = useState(false);

  const deleteDevice = async () => {
    setIsLoading(true);
    try {
      const request = new DeleteDeviceRequest();
      request.setId(item.getId());
      await Client.deleteDevice(request);
      typeof onDelete === 'function' && onDelete();
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

  return (
    <View style={styles.container}>
      <Text>{item.getUid()}</Text>
      <Button isLoading={isLoading} onPress={tryDelete} title={'delete'} />
    </View>
  );
}

export default Item;
