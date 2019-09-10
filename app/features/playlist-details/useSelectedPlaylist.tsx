import { useDispatch, useSelector } from 'react-redux';
import Spotify from '../../types/Spotify';
import { selectedPlaylistActions, selectedPlaylistSelectors } from './store';
import { useApi } from '../../services';
import { resetPlaylist } from './store/actions';

interface UseSelectedPlaylist {
  playlist: Spotify.Playlist;
  doFetch(): void;
  isFetching: boolean;
}

function useSelectedPlaylist(playlistId: string): UseSelectedPlaylist {
  const { playlist, isFetching } = useSelector(
    selectedPlaylistSelectors.getSelectedPlaylist
  );
  const dispatch = useDispatch();
  const api = useApi();

  if (playlist && playlist.id !== playlistId) {
    dispatch(resetPlaylist());
  }
  function doFetch() {
    if (isFetching) {
      return;
    }
    dispatch(selectedPlaylistActions.apiStart());
    api.getPlaylist(playlistId).then(fetchedPlaylist => {
      dispatch(selectedPlaylistActions.setSelectedPlaylist(fetchedPlaylist));
      dispatch(selectedPlaylistActions.apiEnd());
    });
  }

  return { playlist, doFetch, isFetching };
}

export default useSelectedPlaylist;
