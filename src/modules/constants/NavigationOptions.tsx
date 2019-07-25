import React from 'react';
import {
  NavigationScreenProps,
  NavigationStackScreenOptions,
  StackNavigatorConfig,
  HeaderProps
} from 'react-navigation';
import BackIcon from '../../components/navigation/BackIcon';
import Header from '../../components/navigation/Header';
import { View, Easing, Animated } from 'react-native';

const transitionConfigSlide = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: (sceneProps: any) => {
      const { layout, position, scene } = sceneProps;

      const thisSceneIndex = scene.index;
      const width = layout.initWidth;

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0]
      });

      return { transform: [{ translateX }] };
    }
  };
};
const transitionConfigFade = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: (sceneProps: any) => {
      const { position, scene } = sceneProps;

      const thisSceneIndex = scene.index;
      const opacity = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [0, 1]
      });

      return { opacity };
    }
  };
};
const header: StackNavigatorConfig = {
  headerMode: 'screen',
  defaultNavigationOptions: ({
    navigation
  }: NavigationScreenProps<any>): NavigationStackScreenOptions => ({
    title: '',
    headerLeft: (
      <BackIcon
        onPress={() => {
          const prevScreen = navigation.getParam('prevScreen');
          if (prevScreen) {
            navigation.navigate(prevScreen);
          } else {
            navigation.goBack();
          }
        }}
      />
    ),
    header: (props: HeaderProps) => {
      return <Header {...props} />;
    },
    headerRight: <View />
  })
};

const NavigationOptions = {
  header,
  transitionConfigFade,
  transitionConfigSlide
};

export default NavigationOptions;
