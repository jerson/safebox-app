import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

export interface TouchableProps extends TouchableOpacityProps {
  forwardedRef?: any;
  children?: React.ReactNode[] | React.ReactChild;
}

function Touchable(props: TouchableProps, ref: React.Ref<TouchableOpacity>) {
  const { onPress, onLongPress, ...extraProps } = props;

  const hasAction =
    typeof onPress === 'function' || typeof onLongPress === 'function';
  if (!hasAction) {
    return <View ref={ref} {...extraProps} />;
  }
  return (
    <TouchableOpacity
      ref={ref}
      {...extraProps}
      onPress={onPress}
      onLongPress={onLongPress}
    />
  );
}

export default React.forwardRef(Touchable);
