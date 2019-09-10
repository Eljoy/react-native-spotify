import { combineReducers } from 'redux';
import { featuredPlaylistsReducer } from '../features/featured-playlists/store';
import { playerReducer } from '../features/player/store';
import { selectedPlaylistReducer } from '../features/playlist-details/store';

export default combineReducers({
  featuredPlaylists: featuredPlaylistsReducer,
  selectedPlaylist: selectedPlaylistReducer,
  player: playerReducer
});
