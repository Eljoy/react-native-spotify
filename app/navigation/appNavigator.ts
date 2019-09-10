import { createStackNavigator } from 'react-navigation';
import { FeaturedPlaylistsScreen } from '../features/featured-playlists';
import { PlaylistDetailsScreen } from '../features/playlist-details';

export const AppNavigator = createStackNavigator(
  {
    FeaturedPlaylists: {
      screen: FeaturedPlaylistsScreen
    },
    PlaylistDetails: {
      screen: PlaylistDetailsScreen
    }
  },
  {
    headerMode: 'none'
  }
);
