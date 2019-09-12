import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  ViewStyle,
  View,
  StyleProp,
  TextStyle,
  Platform,
} from 'react-native';
import Colors from '../../modules/constants/Colors';
import SplitText from '../ui/SplitText';
import Button from '../ui/Button';
import Text from '../ui/Text';
import Biometrics from 'react-native-biometrics';
import Log from '../../modules/log/Log';
import useAnimatedState from '../hooks/useAnimatedState';
import AlertMessage from '../ui/AlertMessage';
import Client from '../../services/Client';
import {AddDeviceRequest, Device} from '../../proto/services_pb';
import DeviceInfo from 'react-native-device-info';
import Strings from '../../modules/format/Strings';
import NotAvailableDevice from '../help/NotAvailableDevice';
import List, {ListRef} from '../device/List';
import AppStorage from '../../modules/storage/AppStorage';
import SettingsStorage from '../../modules/storage/SettingsStorage';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey1,
  } as ViewStyle,
  content: {
    marginTop: 5,
    alignItems: 'center',
  } as ViewStyle,
  info: {
    marginBottom: 10,
  } as ViewStyle,
  description: {
    fontSize: 12,
    color: Colors.grey5,
  } as TextStyle,
  options: {
    alignItems: 'center',
  } as ViewStyle,
  splitText: {
    marginBottom: 5,
  } as ViewStyle,
  button: {
    minWidth: 160,
  } as ViewStyle,
});

export interface DeviceSettingsProps {
  style?: StyleProp<ViewStyle>;
}

const TAG = '[DeviceSettings]';
function DeviceSettings({style}: DeviceSettingsProps) {
  const [biometricType, setBiometricType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useAnimatedState('');

  const [isAddedCurrentDevice, setIsAddedCurrentDevice] = useState(false);
  const listRef = useRef<ListRef>(null);

  const deviceUid = DeviceInfo.getUniqueIdSync();

  useEffect(() => {
    checkBiometricType();
  }, []);

  const onLoadDevices = (devices: Device[]) => {
    const isAddedCurrentDevice = devices.some(device => {
      return device.getUid() === deviceUid;
    });
    setIsAddedCurrentDevice(isAddedCurrentDevice);
  };

  const checkBiometricType = async () => {
    try {
      const biometryType = await Biometrics.isSensorAvailable();

      if (biometryType === Biometrics.TouchID) {
        setBiometricType(Platform.OS === 'ios' ? 'TouchID' : 'Fingerprint');
      } else if (biometryType === Biometrics.FaceID) {
        setBiometricType(Platform.OS === 'ios' ? 'FaceID' : 'Face recognition');
      }
    } catch (e) {
      Log.warn(TAG, 'checkBiometricType', e);
    }
  };

  const savePublicKey = async (publicKey: string) => {
    const settings = await SettingsStorage.getFirst();
    AppStorage.write(() => {
      settings.biometricPublicKey = publicKey;
    });
  };

  const registerDevice = async (publicKey: string) => {
    setIsLoading(true);
    try {
      const request = new AddDeviceRequest();
      request.setName(DeviceInfo.getDeviceNameSync() || '');
      request.setUid(deviceUid);
      request.setPublickey(publicKey);
      await Client.addDevice(request);
      savePublicKey(publicKey);
      listRef.current && listRef.current.load();
    } catch (e) {
      const message = Strings.getError(e);
      setError(message);
    }
    setIsLoading(false);
  };

  const addDevice = async () => {
    try {
      const publicKey = await Biometrics.createKeys('Please confirm');
      await registerDevice(publicKey);
    } catch (e) {
      const message = Strings.getError(e);
      setError(message);
    }
  };

  return (
    <View style={[styles.container, style]}>
      <SplitText
        style={styles.splitText}
        title={'Biometric settings'}
        type={'Default'}
      />
      {!!error && (
        <AlertMessage
          onTimeout={() => {
            setError('');
          }}
          message={error}
        />
      )}
      {!isAddedCurrentDevice && (
        <View style={styles.content}>
          <View style={styles.info}>
            <Text style={styles.description}>
              you can add additional authentication methods such as fingerprint
              or facial validation, depending on your device.
            </Text>
          </View>
          {!biometricType && <NotAvailableDevice />}
          {!!biometricType && (
            <View style={styles.options}>
              <Button
                isLoading={isLoading}
                onPress={addDevice}
                style={styles.button}
                title={`Add ${biometricType}`}
                icon={'target'}
                typeColor={'primaryLight'}
              />
            </View>
          )}
        </View>
      )}
      <List ref={listRef} currentDeviceUid={deviceUid} onLoad={onLoadDevices} />
    </View>
  );
}

export default DeviceSettings;
