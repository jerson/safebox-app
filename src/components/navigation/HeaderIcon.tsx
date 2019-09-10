import React from 'react';
import {StyleProp, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import Colors from '../../modules/constants/Colors';

import ButtonIcon from '../ui/ButtonIcon';

const styles = StyleSheet.create({
  back: {
    fontSize: 28,
    color: Colors.grey5,
  } as TextStyle,
  container: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    opacity: 1,
  } as ViewStyle,
});

export interface HeaderIconProps {
  onPress?: () => void;
  name: string;
  style?: StyleProp<TextStyle>;
}

function HeaderIcon({style, name, onPress}: HeaderIconProps) {
  return (
    <ButtonIcon
      name={name}
      iconStyle={[styles.back, style]}
      style={styles.container}
      onPress={onPress}
    />
  );
}

export default HeaderIcon;
