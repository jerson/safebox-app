import React from 'react';
import {
  GestureResponderEvent,
  TouchableOpacity,
  TouchableOpacityProps,
  View
} from 'react-native';

export interface TouchableProps extends TouchableOpacityProps {
  forwardedRef?: any;
  children?: React.ReactNode[] | React.ReactChild;
}

export interface TouchableState {}

export class TouchableContainer extends React.Component<
  TouchableProps,
  TouchableState
> {
  onPress = (event: GestureResponderEvent) => {
    const { onPress, accessibilityLabel } = this.props;
    if (typeof onPress === 'function') {
      onPress(event);
    }
  };
  onLongPress = (event: GestureResponderEvent) => {
    const { onLongPress, accessibilityLabel } = this.props;
    if (typeof onLongPress === 'function') {
      onLongPress(event);
    }
  };

  render() {
    const { forwardedRef, onPress, onLongPress, ...props } = this.props;
    const hasAction =
      typeof onPress === 'function' || typeof onLongPress === 'function';
    if (!hasAction) {
      return <View ref={forwardedRef} {...props} />;
    }
    return (
      <TouchableOpacity
        ref={forwardedRef}
        {...props}
        onPress={onPress ? this.onPress : undefined}
        onLongPress={onLongPress ? this.onLongPress : undefined}
      />
    );
  }
}

const Touchable = React.forwardRef<TouchableOpacity, TouchableProps>(
  (props, ref) => {
    return <TouchableContainer {...props} forwardedRef={ref} />;
  }
);
export default Touchable;
