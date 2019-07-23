import * as React from 'react';
import {
  NavigationScreenProps,
  NavigationStackScreenOptions,
  StackNavigatorConfig,
  HeaderProps
} from 'react-navigation';
import BackIcon from '../../components/navigation/BackIcon';
import Header from '../../components/navigation/Header';
import { View } from 'react-native';

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
  header
};

export default NavigationOptions;
