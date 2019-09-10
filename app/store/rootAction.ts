import { featuredPlaylistActions } from '../features/featured-playlists/store';
import { selectedPlaylistActions } from '../features/playlist-details/store';
import { playerActions } from '../features/player/store';

export default {
  featuredPlaylists: featuredPlaylistActions,
  player: playerActions,
  selectedPlaylist: selectedPlaylistActions
};
