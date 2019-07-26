import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  ViewStyle,
  TextStyle,
  View,
  StyleProp,
  Alert,
  Animated
} from 'react-native';
import Colors from '../../modules/constants/Colors';
import Button from '../ui/Button';
import Text from '../ui/Text';
import Session from '../../services/Session';
import { useNavigation } from 'react-navigation-hooks';
import useAnimatedState from '../hooks/useAnimatedState';
import AlertMessage from '../ui/AlertMessage';
import Client from '../../services/Client';
import Strings from '../../modules/format/Strings';
import LinearGradient from 'react-native-linear-gradient';
const tinyColor = require('tinycolor2');
const moment = require('moment');
const momentDurationFormatSetup = require('moment-duration-format');
momentDurationFormatSetup(moment);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 5,
    justifyContent: 'center',
    zIndex: 100
  } as ViewStyle,
  content: {
    marginBottom: 4,
    flexDirection: 'row',
    alignItems: 'center',
    height: 30
  } as ViewStyle,
  button: { minWidth: 100, paddingTop: 1 } as ViewStyle,
  timeout: {
    fontSize: 13,
    color: Colors.grey5,
    flex: 1
  } as TextStyle,
  progress: {
    width: '100%',
    height: 6,
    borderRadius: 6,
    backgroundColor: Colors.accent,
    overflow: 'hidden'
  } as ViewStyle,
  seek: {
    width: '100%',
    height: 6,
    borderRadius: 6,
    backgroundColor: Colors.secondary
  } as ViewStyle
});

const colorsGradient = [
  Colors.grey1,
  Colors.grey1,
  Colors.grey1,
  tinyColor(Colors.grey1)
    .setAlpha(0)
    .toRgbString()
];
const colorsProgress = [
  tinyColor(Colors.danger)
    .setAlpha(0.99)
    .toRgbString(),
  tinyColor(Colors.danger)
    .setAlpha(0.99)
    .toRgbString(),
  tinyColor(Colors.primary)
    .setAlpha(0.99)
    .toRgbString(),
  tinyColor(Colors.primaryLight)
    .setAlpha(0.99)
    .toRgbString(),
  tinyColor(Colors.secondary)
    .setAlpha(0.99)
    .toRgbString()
];

export interface TimeoutProps {
  style?: StyleProp<ViewStyle>;
  onShouldRefresh?: (nearToExpire: boolean) => void;
}

const expirationSeconds = 300;
function Timeout({ onShouldRefresh, style }: TimeoutProps) {
  const { navigate } = useNavigation();
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const [remaining, setRemaining] = useState(0);
  const [error, setError] = useAnimatedState('');
  const [isLoading, setIsLoading] = useState(false);

  const percentAnimation = useRef(new Animated.Value(100)).current;

  const refreshToken = async () => {
    setIsLoading(true);
    try {
      const response = await Client.refreshToken();
      Session.login(response);
    } catch (e) {
      const message = Strings.getError(e);
      setError(message);
    }
    setIsLoading(false);
  };
  const tick = () => {
    if (!Session.getAccessToken()) {
      return;
    }
    const diff = Math.round(
      moment
        .duration(moment(Session.getDateExpire()).diff(moment()))
        .asSeconds()
    );

    setRemaining(diff);

    if (diff < 2) {
      setShouldRefresh(false);
    } else if (diff < 30) {
      setShouldRefresh(true);
    } else {
      setShouldRefresh(false);
    }

    if (diff < 1) {
      navigate('Login');
    }
  };

  useEffect(() => {
    if (shouldRefresh) {
      Alert.alert(
        'Your session is about to expire',
        'Do you want to extend the session?',
        [
          {
            text: 'Extend session',
            onPress: () => {
              refreshToken();
            }
          },
          {
            text: 'Ignore',
            style: 'cancel'
          }
        ],
        { cancelable: false }
      );
    }
    typeof onShouldRefresh === 'function' && onShouldRefresh(shouldRefresh);
  }, [shouldRefresh]);

  useEffect(() => {
    tick();
    const interval = setInterval(() => {
      tick();
    }, 500);

    return () => {
      clearTimeout(interval);
    };
  });

  const getPercent = () => {
    return Math.round((remaining / expirationSeconds) * 100);
  };
  useEffect(() => {
    Animated.spring(percentAnimation, {
      toValue: getPercent()
    }).start();
  }, [remaining]);

  const format = moment.duration(remaining, 'seconds').format('mm:ss');
  const percentValue = getPercent();

  const color = percentAnimation.interpolate({
    inputRange: [0, 5, 10, 30, 100],
    outputRange: colorsProgress
  });
  const percentString = percentAnimation.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%']
  });

  return (
    <LinearGradient colors={colorsGradient} style={[styles.container, style]}>
      {!!error && <AlertMessage message={error} />}
      <View style={styles.content}>
        <Text style={styles.timeout}>Session expires in {format}</Text>

        {percentValue < 50 && (
          <Button
            small
            isLoading={isLoading}
            style={styles.button}
            onPress={refreshToken}
            typeColor={'accentDark'}
            title={'Extend'}
          />
        )}
      </View>
      <View style={styles.progress}>
        <Animated.View
          style={[
            styles.seek,
            { width: percentString, backgroundColor: color }
          ]}
        />
      </View>
    </LinearGradient>
  );
}

export default Timeout;
