import {createStackNavigator} from 'react-navigation-stack';
import NavigationOptions from '../../modules/constants/NavigationOptions';
import SettingsScreen from '../../scenes/app/SettingsScreen';

export default createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  {
    ...NavigationOptions.header,
  },
);
