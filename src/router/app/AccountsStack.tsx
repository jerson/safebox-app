import { createStackNavigator } from 'react-navigation';
import NavigationOptions from '../../modules/constants/NavigationOptions';
import AccountsScreen from '../../scenes/app/AccountsScreen';
import AddAccountScreen from '../../scenes/app/AddAccount';

export default createStackNavigator(
  {
    Accounts: AccountsScreen,
    AddAccount: AddAccountScreen
  },
  {
    ...NavigationOptions.header,
    transitionConfig: NavigationOptions.transitionConfigSlide
  }
);
