// eslint-disable-next-line import/no-unresolved
import { AppTypes } from '../../../store/types';

export const getPlaylist = (state: AppTypes.RootState) =>
  state.player.playlist;

export const getCurrentTrack = (state: AppTypes.RootState) => {
  const { playlist, currentlyPlaying } = state.player;
  if (!playlist || !currentlyPlaying.currentTrackId) {
    return null;
  }
  const trackItem = playlist.tracks.items.find(
    item => item.track.id === currentlyPlaying.currentTrackId
  );
  return trackItem.track;
};

export const getCurrentlyPlaying = (state: AppTypes.RootState) =>
  state.player.currentlyPlaying;
