import { App } from './App';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Text} from 'react-native'

AppRegistry.registerComponent(appName, () => App);
