import React from 'react';
import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  ViewStyle
} from 'react-native';
import Colors from '../../modules/constants/Colors';
import Touchable from '../ui/Touchable';

const styles = StyleSheet.create({
  back: {
    width: 21,
    height: 21,
    tintColor: Colors.grey4
  } as ImageStyle,
  container: {
    height: 50,
    width: 50,
    paddingLeft: 20,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    opacity: 1
  } as ViewStyle
});

export interface BackIconProps {
  onPress?: () => void;
  style?: StyleProp<ImageStyle>;
}

function BackIcon({ style, onPress, ...props }: BackIconProps) {
  return (
    <Touchable style={styles.container} onPress={onPress}>
      <Image
        style={[styles.back, style]}
        source={require('../../assets/images/back-icon.png')}
        {...props}
      />
    </Touchable>
  );
}

export default BackIcon;
