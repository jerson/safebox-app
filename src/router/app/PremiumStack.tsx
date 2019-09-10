import {createStackNavigator} from 'react-navigation';
import NavigationOptions from '../../modules/constants/NavigationOptions';
import PremiumScreen from '../../scenes/app/PremiumScreen';

export default createStackNavigator(
  {
    Premium: PremiumScreen,
  },
  {
    ...NavigationOptions.header,
  },
);
