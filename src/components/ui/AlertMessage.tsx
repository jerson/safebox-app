import React from 'react';
import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import Touchable, { TouchableProps } from './Touchable';
import Colors from '../../modules/constants/Colors';
import Text from './Text';
import Icon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: Colors.danger,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  } as ViewStyle,
  text: {
    color: Colors.white,
    fontSize: 13
  } as TextStyle,
  icon: {
    fontSize: 18,
    marginRight: 6,
    marginTop: 2,
    alignSelf: 'flex-start',
    color: Colors.white,
    opacity: 0.8
  } as TextStyle,
  content: {
    flex: 1
  } as ViewStyle
});

export interface AlertMessageProps extends TouchableProps {
  message?: string;
}

function AlertMessage(props: AlertMessageProps) {
  const { style, onPress, message, ...extraProps } = props;

  return (
    <Touchable
      style={[styles.container, style]}
      onPress={onPress}
      {...extraProps}
    >
      <Icon style={styles.icon} name={'alert-octagon'} />
      <View style={styles.content}>
        <Text style={styles.text}>{message}</Text>
      </View>
    </Touchable>
  );
}

export default AlertMessage;
