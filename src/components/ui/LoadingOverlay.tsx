import React, { useState, useEffect } from 'react';
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

function LoadingOverlay(props: LoadingOverlayProps) {
  const { style, isLoading, duration, ...extraProps } = props;

  const [isVisible, setIsVisible] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));

  let animation: Animated.CompositeAnimation;

  useEffect(() => {
    isLoading && animatedFade();
  }, []);

  useEffect(() => {
    animatedFade();
  }, [isLoading]);

  const animatedFade = () => {
    setIsVisible(true);

    animation && animation.stop();
    animation = Animated.timing(fadeAnim, {
      toValue: isLoading ? 1 : 0,
      duration
    });

    animation.start(() => {
      setIsVisible(isLoading);
    });
  };

  if (!isVisible) {
    return null;
  }
  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }, style]}>
      <Loading {...extraProps} />
    </Animated.View>
  );
}
LoadingOverlay.defaultProps = {
  size: 'large',
  color: Colors.primary,
  isLoading: false,
  duration: 100
};
export default LoadingOverlay;
