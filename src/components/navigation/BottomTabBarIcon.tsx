import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
  StyleProp,
  Animated
} from 'react-native';
import Colors from '../../modules/constants/Colors';

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 10,
    right: 10,
    top: 5,
    bottom: -10,

    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    backgroundColor: Colors.primaryLight,
    zIndex: 0
  } as ViewStyle,
  content: {
    flex: 1,
    position: 'relative'
  } as ViewStyle
});

export interface BottomTabBarIconProps {
  focused: boolean;
  onPress: () => void;
  onLongPress: () => void;
  accessibilityLabel: string;
  style: StyleProp<ViewStyle>;
}

export interface BottomTabBarIconState {
  active: Animated.Value;
}

export default class BottomTabBarIcon extends React.Component<
  BottomTabBarIconProps,
  BottomTabBarIconState
> {
  state: BottomTabBarIconState = {
    active: new Animated.Value(0)
  };

  animation!: Animated.CompositeAnimation;

  componentDidMount() {
    const { focused } = this.props;

    this.setState({ active: new Animated.Value(focused ? 1 : 0) });
  }

  componentDidUpdate(prevProps: BottomTabBarIconProps) {
    const { focused } = this.props;
    if (prevProps.focused !== focused) {
      if (focused) {
        this.focus();
      } else {
        this.blur();
      }
    }
  }

  focus() {
    this.animation && this.animation.stop();
    this.animation = Animated.spring(this.state.active, {
      toValue: 1,
      friction: 4
    });

    this.animation.start();
  }

  blur() {
    this.animation && this.animation.stop();
    this.animation = Animated.spring(this.state.active, {
      toValue: 0
    });
    this.animation.start();
  }

  render() {
    const {
      accessibilityLabel,
      onPress,
      onLongPress,
      focused,
      children,
      ...props
    } = this.props;
    const { active } = this.state;

    const opacity = active.interpolate({
      inputRange: [0, 0.2, 1],
      outputRange: [0, 1, 1]
    });
    const scale = active.interpolate({
      inputRange: [0, 1],
      outputRange: [0.1, 1]
    });
    const top = active.interpolate({
      inputRange: [0, 1],
      outputRange: [55, 2]
    });

    const transform = {
      opacity,
      top,
      transform: [
        {
          scale
        }
      ]
    };

    return (
      <TouchableWithoutFeedback
        accessibilityLabel={accessibilityLabel}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <View style={styles.content}>
          <Animated.View style={[styles.background, transform]} />

          <View {...props}>{children}</View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
