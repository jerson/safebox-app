import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const MainNavigator = createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Auth',
  },
) as any;
export default createAppContainer(MainNavigator);
