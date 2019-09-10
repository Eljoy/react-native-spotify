import { createAction } from 'typesafe-actions';
import Spotify from '../../../types/Spotify';

export const setFeaturedPlaylists = createAction(
  'featuredPlaylists/SET',
  action => {
    return (featuredPlaylists: Spotify.PlaylistPreview[]) =>
      action(featuredPlaylists, {});
  }
);

export const apiStart = createAction('featuredPlaylists/API_START', action => {
  return () => action(null, {});
});

export const apiEnd = createAction('featuredPlaylists/API_END', action => {
  return () => action(null, {});
});
