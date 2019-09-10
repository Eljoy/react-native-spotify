import { useDispatch, useSelector } from 'react-redux';
import { featuredPlaylistActions, featuredPlaylistSelectors } from './store';
import { useApi } from '../../services';
import Spotify from '../../types/Spotify';

interface UseFeaturedPlaylists {
  playlists: Spotify.PlaylistPreview[];
  doFetch(): void;
  isFetching: boolean;
}

export default function useFeaturedPlaylists(): UseFeaturedPlaylists {
  const { playlists, isFetching } = useSelector(
    featuredPlaylistSelectors.getFeaturedPlaylists
  );
  const dispatch = useDispatch();
  const api = useApi();

  function doFetch() {
    if (isFetching) {
      return;
    }
    dispatch(featuredPlaylistActions.apiStart());
    api.getFeaturedPlaylistPreviews().then(fetchedPlaylists => {
      dispatch(featuredPlaylistActions.setFeaturedPlaylists(fetchedPlaylists));
      dispatch(featuredPlaylistActions.apiEnd());
    });
  }

  return { playlists, isFetching, doFetch };
}
