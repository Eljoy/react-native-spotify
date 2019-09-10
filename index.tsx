/**
 * @format
 */

import { AppRegistry } from 'react-native';
// @ts-ignore
import TrackPlayer from 'react-native-track-player';
import App from './app/App';
// @ts-ignore
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => require('./PlayService'));
