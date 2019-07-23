import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import BottomTabBar from '../components/navigation/BottomTabBar';
import Colors from '../modules/constants/Colors';
import LoginScreen from '../scenes/auth/LoginScreen';
import { L } from '../modules/locale';

export default createBottomTabNavigator(
  {
    Sample: LoginScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state;
      let tabBarLabel;

      switch (routeName) {
        case 'Sample':
          tabBarLabel = L.app_name;
          break;
        default:
          tabBarLabel = routeName;
          break;
      }
      return {
        tabBarLabel,
        tabBarIcon: () => {
          let imageSource = require('../assets/images/back-icon.png');
          const iconStyleTab = { width: 22, height: 22 };
          if (routeName === 'Sample') {
            imageSource = require('../assets/images/back-icon.png');
          }
          return (
            <Image
              resizeMode={'contain'}
              source={imageSource}
              style={[iconStyleTab, { tintColor: Colors.grey6 }]}
            />
          );
        }
      };
    },
    tabBarComponent: props => {
      return <BottomTabBar {...props} />;
    }
  }
);
