import { createStackNavigator } from 'react-navigation';
import NavigationOptions from '../../modules/constants/NavigationOptions';
import AccountsScreen from '../../scenes/app/AccountsScreen';

export default createStackNavigator(
  {
    Accounts: AccountsScreen
  },
  {
    ...NavigationOptions.header,
    transitionConfig: NavigationOptions.transitionConfigSlide
  }
);
