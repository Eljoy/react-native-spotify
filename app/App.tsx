import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './store';
import { ApiProvider, ApiService } from './services';
import { AppThemeProvider } from './theme';
import { ScreenNames } from './navigation';
import { AppStatusBar } from './components';
import { FeaturedPlaylistsScreen } from './features/featured-playlists';
import { PlaylistDetailsScreen } from './features/playlist-details';

const Stack = createStackNavigator();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <AppThemeProvider>
        <ApiProvider value={ApiService}>
          <AppStatusBar/>
          <Stack.Navigator initialRouteName={ScreenNames.FeaturedPlaylists} headerMode='none'>
            <Stack.Screen name={ScreenNames.FeaturedPlaylists} component={FeaturedPlaylistsScreen}/>
            <Stack.Screen name={ScreenNames.PlaylistDetails} component={PlaylistDetailsScreen}/>
          </Stack.Navigator>
        </ApiProvider>
      </AppThemeProvider>
    </NavigationContainer>
  </Provider>
);

export default App;
