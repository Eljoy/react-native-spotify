import { createAction } from 'typesafe-actions';
import Spotify from '../../../types/Spotify';
import { PlayingState, TrackState } from './playerReducer';

type OriginType = 'playback-origin';

export const setPlaylist = createAction('player/SET_PLAYLIST', action => {
  return (playlist: Spotify.Playlist) => action(playlist, {});
});

export const setCurrentTrack = createAction(
  'player/SET_CURRENT_TRACK',
  action => {
    return (trackId: string) => action(trackId, {});
  }
);

export const setCurrentlyPlaying = createAction(
  'player/SET_CURRENTLY_PLAYING',
  action => {
    return (trackState: TrackState, origin?: OriginType) =>
      action(trackState, { origin });
  }
);

export const setPlayingState = createAction(
  'player/SET_PLAYING_STATE',
  action => {
    return (playingState: PlayingState, origin?: OriginType) =>
      action(playingState, { origin });
  }
);

export const setDuration = createAction('player/SET_POSITION', action => {
  return (duration: number, origin?: OriginType) =>
    action(duration, { origin });
});

export const setPosition = createAction('player/SET_POSITION', action => {
  return (position: number, origin?: OriginType) =>
    action(position, { origin });
});
