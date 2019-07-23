import React from 'react';
import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle
} from 'react-native';
import Colors from '../../modules/constants/Colors';

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

const BackIcon: React.FC<BackIconProps> = ({ style, onPress, ...props }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        style={[styles.back, style]}
        source={require('../../assets/images/back-icon.png')}
        {...props}
      />
    </TouchableOpacity>
  );
};

export default BackIcon;
