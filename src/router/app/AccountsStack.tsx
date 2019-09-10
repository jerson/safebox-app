import {createStackNavigator} from 'react-navigation-stack';
import NavigationOptions from '../../modules/constants/NavigationOptions';
import AccountsScreen from '../../scenes/app/AccountsScreen';
import AddAccountScreen from '../../scenes/app/AddAccountScreen';
import AccountScreen from '../../scenes/app/AccountScreen';

export default createStackNavigator(
  {
    Accounts: AccountsScreen,
    Account: AccountScreen,
    AddAccount: AddAccountScreen,
  },
  {
    ...NavigationOptions.header,
  },
);
