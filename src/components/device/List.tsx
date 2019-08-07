import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ViewStyle, TextStyle } from 'react-native';
import Text from '../ui/Text';
import { Device } from '../../proto/services_pb';
import useAnimatedState from '../hooks/useAnimatedState';
import Item from './Item';
import AlertMessage from '../ui/AlertMessage';
import Strings from '../../modules/format/Strings';
import Client from '../../services/Client';
import Loading from '../ui/Loading';
import { useNavigation } from 'react-navigation-hooks';
import useFocusedScreen from '../hooks/useFocusedScreen';
import Colors from '../../modules/constants/Colors';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10,
    paddingBottom: 0
  } as ViewStyle,
  header: {
    marginBottom: 5
  } as ViewStyle,
  title: {
    fontSize: 15,
    color: Colors.grey6
  } as TextStyle
});

export interface ListProps {
  onLoad?: (items: Device[]) => void;
  currentDeviceUid?: string;
}

export interface ListRef {
  load: () => void;
}

function List(
  { onLoad, currentDeviceUid }: ListProps,
  ref: React.Ref<ListRef>
) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useAnimatedState('');
  const [devices, setDevices] = useState<Device[]>([]);
  const navigation = useNavigation();

  React.useImperativeHandle(ref, () => ({
    load
  }));

  useEffect(() => {
    setIsLoading(true);
    load();
  }, []);

  const [focused] = useFocusedScreen(navigation);

  useEffect(() => {
    focused && load();
  }, [focused]);

  const load = async () => {
    try {
      const devices = await Client.getDevices();
      const list = devices.getDevicesList();
      setDevices(list);
      typeof onLoad === 'function' && onLoad(list);
    } catch (e) {
      const message = Strings.getError(e);
      setError(message);
    }
    setIsLoading(false);
  };

  const onDeleteDevice = () => {
    load();
  };

  if (devices.length < 1) {
    return <View />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text weight={'SemiBold'} style={styles.title}>
          Biometric devices
        </Text>
      </View>
      {!!error && (
        <AlertMessage
          onTimeout={() => {
            setError('');
          }}
          message={error}
        />
      )}
      {isLoading && <Loading />}
      {devices.map(device => {
        return (
          <Item
            key={device.getId().toString()}
            item={device}
            onDelete={onDeleteDevice}
            isSame={currentDeviceUid === device.getUid()}
          />
        );
      })}
    </View>
  );
}

export default React.forwardRef(List);
