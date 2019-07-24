import React from 'react';
import { Animated, StyleSheet, ViewStyle } from 'react-native';
import Loading, { LoadingProps } from './Loading';
import Colors from '../../modules/constants/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey1,
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    flex: 1,
    zIndex: 1000,
    justifyContent: 'center'
  } as ViewStyle
});

export interface LoadingOverlayProps extends LoadingProps {
  isLoading: boolean;
  duration?: number;
}

export interface LoadingOverlayState {
  isVisible: boolean;
}

export default class LoadingOverlay extends React.Component<
  LoadingOverlayProps,
  LoadingOverlayState
> {
  static defaultProps = {
    size: 'large',
    color: Colors.primary,
    isLoading: false,
    duration: 100
  };

  state: LoadingOverlayState = {
    isVisible: false
  };

  fadeAnim = new Animated.Value(0);
  private animation?: Animated.CompositeAnimation;

  componentDidMount() {
    const { isLoading } = this.props;
    isLoading && this.animatedFade();
  }

  componentDidUpdate(prevProps: LoadingOverlayProps) {
    if (prevProps.isLoading !== this.props.isLoading) {
      this.animatedFade();
    }
  }

  animatedFade = () => {
    const { isLoading, duration } = this.props;
    this.setState({ isVisible: true });

    this.animation && this.animation.stop();
    this.animation = Animated.timing(this.fadeAnim, {
      toValue: isLoading ? 1 : 0,
      duration
    });

    this.animation.start(() => {
      this.setState({ isVisible: isLoading });
    });
  };

  render() {
    const { style, ...props } = this.props;
    const { isVisible } = this.state;

    if (!isVisible) {
      return null;
    }
    return (
      <Animated.View
        style={[styles.container, { opacity: this.fadeAnim }, style]}
      >
        <Loading {...props} />
      </Animated.View>
    );
  }
}
