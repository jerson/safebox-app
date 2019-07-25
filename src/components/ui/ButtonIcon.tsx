import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import Touchable, { TouchableProps } from './Touchable';
import Icon from 'react-native-vector-icons/Feather';

export interface ButtonIconProps extends TouchableProps {
  name: string;
  iconStyle?: StyleProp<TextStyle>;
}

function ButtonIcon(props: ButtonIconProps) {
  const { name, onPress, iconStyle, ...extraProps } = props;
  return (
    <Touchable {...extraProps} onPress={onPress}>
      <Icon name={name} style={iconStyle} />
    </Touchable>
  );
}
export default ButtonIcon;
