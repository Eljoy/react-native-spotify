import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FeaturedPlaylistsContainer from './features/featured-playlists/FeaturedPlaylistsContainer';
import PlaylistDetailsContainer from './features/playlist-details/PlaylistDetailsContainer';
import { AppThemeProvider } from './core/theme/AppTheme';
import { ApiProvider, ApiService } from './core';

const AppNavigator = createStackNavigator(
  {
    FeaturedPlaylists: {
      screen: FeaturedPlaylistsContainer
    },
    PlaylistDetails: {
      screen: PlaylistDetailsContainer
    }
  },
  {
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => (
  <AppThemeProvider>
    <ApiProvider api={ApiService}>
      <AppContainer />
    </ApiProvider>
  </AppThemeProvider>
);

export default App;
