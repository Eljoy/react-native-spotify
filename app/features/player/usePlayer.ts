import { useDispatch, useSelector } from 'react-redux';
import Spotify from '../../types/Spotify';
import {
  getCurrentlyPlaying,
  getCurrentTrack,
  getPlaylist
} from './store/selectors';
import { playerActions } from './store';
import { PlayingState } from './store/playerReducer';

interface UsePlayer {
  setPlaylist(playlist: Spotify.Playlist): void;
  setCurrentTrack(track: Spotify.Track): void;
  playTrack(playlist: Spotify.Playlist, track: Spotify.Track): void;
  playCurrentTrack(): void;
  pause(): void;
  stop(): void;
  playerState: {
    playlist: Spotify.Playlist;
    currentTrack: Spotify.Track;
    duration: number;
    position: number;
    playingState: PlayingState;
    isPlaying: boolean;
    isStopped: boolean;
    isPaused: boolean;
  };
}

function usePlayer(): UsePlayer {
  const dispatch = useDispatch();
  const controlsState = useSelector(getCurrentlyPlaying);
  const { playingState } = controlsState;
  const playerState = {
    playlist: useSelector(getPlaylist),
    currentTrack: useSelector(getCurrentTrack),
    isPlaying: playingState === PlayingState.PLAYING,
    isStopped: playingState === PlayingState.STOPPED,
    isPaused: playingState === PlayingState.PAUSED,
    ...controlsState
  };
  const setPlaylist = (playlist: Spotify.Playlist) =>
    dispatch(playerActions.setPlaylist(playlist));

  const setCurrentTrack = (track: Spotify.Track) =>
    dispatch(playerActions.setCurrentTrack(track.id));

  const playTrack = (playlist: Spotify.Playlist, track: Spotify.Track) => {
    if (playerState.currentTrack && playerState.currentTrack.id === track.id) {
      return;
    }
    if (!playerState.playlist || playerState.playlist.id !== playlist.id) {
      dispatch(playerActions.setPlaylist(playlist));
    }
    dispatch(
      playerActions.setCurrentlyPlaying({
        playingState: PlayingState.PLAYING,
        currentTrackId: track.id,
        duration: Math.floor(track.duration_ms / 1000),
        position: 0
      })
    );
  };

  const playCurrentTrack = () =>
    dispatch(playerActions.setPlayingState(PlayingState.PLAYING));

  const pause = () =>
    dispatch(playerActions.setPlayingState(PlayingState.PAUSED));

  const stop = () =>
    dispatch(playerActions.setPlayingState(PlayingState.STOPPED));

  return {
    playerState,
    setPlaylist,
    setCurrentTrack,
    playTrack,
    playCurrentTrack,
    pause,
    stop
  };
}

export default usePlayer;
