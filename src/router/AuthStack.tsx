import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../scenes/auth/LoginScreen';
import RegisterScreen from '../scenes/auth/RegisterScreen';
import NavigationOptions from '../modules/constants/NavigationOptions';

export default createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
  } as any,
  {
    ...NavigationOptions.header,
    transitionConfig: NavigationOptions.transitionConfigFade,
  },
);
