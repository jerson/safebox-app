import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  ViewStyle,
  View,
  StyleProp,
  Alert,
  TextStyle
} from 'react-native';
import Colors from '../../modules/constants/Colors';
import SplitText from '../ui/SplitText';
import Button from '../ui/Button';
import Session from '../../services/Session';
import { useNavigation } from 'react-navigation-hooks';
import Text from '../ui/Text';
import Log from '../../modules/log/Log';
import Client from '../../services/Client';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey1
  } as ViewStyle,
  content: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center'
  } as ViewStyle,
  info: {
    flex: 1,
    paddingRight: 10
  } as ViewStyle,
  description: {
    fontSize: 12,
    color: Colors.grey5
  } as TextStyle,
  button: {
    minWidth: 120
  } as ViewStyle
});

export interface SessionSettingsProps {
  style?: StyleProp<ViewStyle>;
}

const TAG = '[SessionSettings]';
function SessionSettings({ style }: SessionSettingsProps) {
  const { navigate } = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const tryLogout = useCallback(() => {
    Alert.alert(
      'Sign out',
      'Are you sure?',
      [
        {
          text: 'Yes, Sign out',
          onPress: () => {
            logout();
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
  }, []);

  const logout = async () => {
    setIsLoading(true);
    try {
      await Client.logout();
    } catch (e) {
      Log.warn(TAG, 'logout', e);
    }
    Session.logout();
    navigate('Login');
    setIsLoading(false);
  };

  return (
    <View style={[styles.container, style]}>
      <SplitText title={'Session settings'} type={'Default'} />
      <View style={styles.content}>
        <View style={styles.info}>
          <Text style={styles.description}>
            This option allows you to safely exit the application.
          </Text>
        </View>
        <Button
          style={styles.button}
          isLoading={isLoading}
          title={'Sign out'}
          typeColor={'accentDark'}
          onPress={tryLogout}
        />
      </View>
    </View>
  );
}

export default SessionSettings;
