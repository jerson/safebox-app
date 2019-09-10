import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BottomTabBar from '../components/navigation/BottomTabBar';
import Colors from '../modules/constants/Colors';
import AccountsStack from './app/AccountsStack';
import Icon from 'react-native-vector-icons/Feather';
import SettingsStack from './app/SettingsStack';
import PremiumStack from './app/PremiumStack';

export default createBottomTabNavigator(
  {
    Accounts: AccountsStack,
    Premium: PremiumStack,
    Settings: SettingsStack,
  },
  {
    defaultNavigationOptions: ({navigation}: any) => {
      const {routeName} = navigation.state;
      let tabBarLabel;
      let iconName: string;

      switch (routeName) {
        case 'Accounts':
          tabBarLabel = 'Secrets';
          iconName = 'lock';
          break;
        case 'Settings':
          tabBarLabel = 'Settings';
          iconName = 'settings';
          break;
        case 'Premium':
          tabBarLabel = 'Premium';
          iconName = 'star';
          break;
        default:
          tabBarLabel = routeName;
          iconName = 'box';
          break;
      }
      return {
        tabBarLabel,

        tabBarIcon: ({focused}: any) => {
          const iconStyleTab = {fontSize: 22};
          const color = focused ? Colors.white : Colors.grey5;
          return <Icon name={iconName} style={[iconStyleTab, {color}]} />;
        },
      };
    },
    tabBarComponent: (props: any) => {
      return <BottomTabBar {...props} />;
    },
    animationEnabled: true,
    tabBarOptions: {
      scrollEnabled: true,
    },
  } as any,
);
