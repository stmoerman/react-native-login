/*
Copyright Scope Web LLC
https://www.scopeweb.nyc
Email: info@scopeweb.nyc
*/
import {AppRegistry} from 'react-native';
import App from './App';
import Login from './components/Login';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Login);
