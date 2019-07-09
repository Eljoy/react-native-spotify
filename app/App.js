/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { AppThemeProvider } from "./core/theme/AppTheme";
import { ApiProvider, ApiService } from "./core";
import FeaturedPlaylistsContainer from "./features/featured-playlists/FeaturedPlaylistsContainer";
import PlaylistDetailsContainer from "./features/playlist-details/PlaylistDetailsContainer";

const AppNavigator = createStackNavigator({
    FeaturedPlaylists: {
      screen: FeaturedPlaylistsContainer
    },
    PlaylistDetails: {
      screen: PlaylistDetailsContainer
    }
  },
  {
    headerMode: "none"
  });

const AppContainer = createAppContainer(AppNavigator);

const App = () => (
  <AppThemeProvider>
    <ApiProvider api={ApiService}>
      <AppContainer/>
    </ApiProvider>
  </AppThemeProvider>
);

export default App;
