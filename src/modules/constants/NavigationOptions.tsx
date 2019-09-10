import React from 'react';
import {NavigationScreenProps} from 'react-navigation';
import Header from '../../components/navigation/Header';
import {View, Easing, Animated} from 'react-native';
import HeaderIcon from '../../components/navigation/HeaderIcon';
import {HeaderProps} from 'react-navigation-stack/lib/typescript/types';

const transitionConfigSlide = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: (sceneProps: any) => {
      const {layout, position, scene} = sceneProps;

      const thisSceneIndex = scene.index;
      const width = layout.initWidth;

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      });

      return {transform: [{translateX}]};
    },
  };
};
const transitionConfigFade = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: (sceneProps: any) => {
      const {position, scene} = sceneProps;

      const thisSceneIndex = scene.index;
      const opacity = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [0, 1],
      });

      return {opacity};
    },
  };
};
const header = {
  headerMode: 'screen',
  defaultNavigationOptions: ({navigation}: NavigationScreenProps<any>) => ({
    title: '',
    headerLeft: (
      <HeaderIcon
        name={'arrow-left'}
        onPress={() => {
          navigation.goBack();
        }}
      />
    ),
    header: (props: HeaderProps) => {
      return <Header {...props} />;
    },
    headerRight: <View />,
  }),
};

const NavigationOptions = {
  header,
  transitionConfigFade,
  transitionConfigSlide,
} as any;

export default NavigationOptions;
