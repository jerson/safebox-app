import React, {useEffect} from 'react';
import {StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import Touchable, {TouchableProps} from './Touchable';
import Colors from '../../modules/constants/Colors';
import Text from './Text';
import Icon from 'react-native-vector-icons/Feather';
import useAnimatedState from '../hooks/useAnimatedState';

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: Colors.danger,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  } as ViewStyle,
  text: {
    color: Colors.white,
    fontSize: 13,
  } as TextStyle,
  icon: {
    fontSize: 18,
    marginRight: 6,
    marginTop: 2,
    alignSelf: 'flex-start',
    color: Colors.white,
    opacity: 0.8,
  } as TextStyle,
  content: {
    flex: 1,
  } as ViewStyle,
});

export interface AlertMessageProps extends TouchableProps {
  message?: string;
  timeout?: number;
  icon?: string;
  color?: string;
  onTimeout?: () => void;
}

function AlertMessage(props: AlertMessageProps) {
  const {
    style,
    onPress,
    icon,
    color,
    timeout,
    onTimeout,
    message,
    ...extraProps
  } = props;

  const [visible, setVisible] = useAnimatedState(true);

  useEffect(() => {
    if ((timeout || 0) < 1) {
      return;
    }
    const listener = setTimeout(() => {
      setVisible(false);
      typeof onTimeout === 'function' && onTimeout();
    }, timeout);

    return () => {
      clearTimeout(listener);
    };
  }, [timeout]);

  if (!visible) {
    return null;
  }
  return (
    <Touchable
      style={[styles.container, {backgroundColor: color}, style]}
      onPress={onPress}
      {...extraProps}>
      <Icon style={styles.icon} name={icon || 'alert-circle'} />
      <View style={styles.content}>
        <Text style={styles.text}>{message}</Text>
      </View>
    </Touchable>
  );
}
AlertMessage.defaultProps = {
  timeout: 5000,
  icon: 'alert-circle',
  color: Colors.danger,
};
export default AlertMessage;
