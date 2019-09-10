import { createAction } from 'typesafe-actions';
import Spotify from '../../../types/Spotify';

export const setSelectedPlaylist = createAction(
  'selectedPlaylist/SET',
  action => {
    return (selectedPlaylist: Spotify.Playlist) => action(selectedPlaylist, {});
  }
);

export const resetPlaylist = createAction('selectedPlaylist/RESET', action => {
  return () => action(null, {});
});

export const apiStart = createAction('selectedPlaylist/API_START', action => {
  return () => action(null, {});
});

export const apiEnd = createAction('selectedPlaylist/API_END', action => {
  return () => action(null, {});
});
