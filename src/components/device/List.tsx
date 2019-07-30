import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
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

const styles = StyleSheet.create({
  container: {
    padding: 10
  } as ViewStyle
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
    load();
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

  return (
    <View style={styles.container}>
      <View>
        <Text>Biometric added</Text>
      </View>
      {!!error && <AlertMessage message={error} />}
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
