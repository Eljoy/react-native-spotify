import { Dispatch, MiddlewareAPI } from 'redux';
import { isActionOf } from 'typesafe-actions';
import { AppTypes } from '../../../store/types';
import { playerActions } from './index';
import { getCurrentTrack } from './selectors';
import { setPlayingState, setPosition } from './actions';
import { PlayerHandler } from '../types';
import { PlayingState } from './playerReducer';

export default (playerHandler: PlayerHandler) => (
  store: MiddlewareAPI<Dispatch, AppTypes.RootState>
) => {
  playerHandler.setup().then(() => {
    playerHandler.onCurrentTimeChanged(currentTimeSec => {
      store.dispatch(setPosition(currentTimeSec, 'playback-origin'));
    });
    playerHandler.onPlaybackFinished(() => {
      store.dispatch(setPlayingState(PlayingState.STOPPED, 'playback-origin'));
    });
  });

  return (next: Dispatch) => (action: AppTypes.RootAction) => {
    if (!isActionOf(Object.values(playerActions))) {
      return next(action);
    }
    const prevPlayerState = store.getState().player;
    const {
      position: prevPosition,
      playingState: prevPlayingState,
      currentTrackId: prevTrackId
    } = prevPlayerState.currentlyPlaying;
    const wasPlaying = prevPlayingState === PlayingState.PLAYING;

    const result = next(action);

    const nextPlayerState = store.getState().player;
    const {
      position: nextPosition,
      playingState: nextPlayingState,
      currentTrackId: nextTrackId
    } = nextPlayerState.currentlyPlaying;
    const isPlaying = nextPlayingState === PlayingState.PLAYING;

    if ('origin' in action.meta && action.meta.origin === 'playback-origin') {
      return result;
    }

    if (prevTrackId !== nextTrackId) {
      const track = getCurrentTrack(store.getState());
      playerHandler.setCurrentTrack(track);
    }

    if (!wasPlaying && isPlaying) playerHandler.play();
    if (wasPlaying && !isPlaying) playerHandler.pause();
    if (prevPosition !== nextPosition) playerHandler.seekTo(nextPosition);

    return result;
  };
};
