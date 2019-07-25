import { createStackNavigator } from 'react-navigation';
import NavigationOptions from '../../modules/constants/NavigationOptions';
import AboutScreen from '../../scenes/app/AboutScreen';

export default createStackNavigator(
  {
    About: AboutScreen
  },
  {
    ...NavigationOptions.header
  }
);
