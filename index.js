import { AppRegistry } from 'react-native';
import App from './src/App';
import { name } from './app.json';


console.disableYellowBox = true;
AppRegistry.registerComponent(name, () => App);
