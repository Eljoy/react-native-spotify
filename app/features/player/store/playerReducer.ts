import { combineReducers } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import Spotify from '../../../types/Spotify';
import { playerActions } from './index';
import {
  setCurrentlyPlaying,
  setDuration,
  setPosition,
  setPlayingState,
  setCurrentTrack,
  setPlaylist
} from './actions';

export enum PlayingState {
  PLAYING = 'PLAYING',
  PAUSED = 'PAUSED',
  STOPPED = 'STOPPED'
}

export type TrackState = {
  position: number;
  duration: number;
  playingState: PlayingState;
  currentTrackId?: string;
};

export type PlayerState = Readonly<{
  playlist: Spotify.Playlist;
  currentlyPlaying: TrackState;
}>;

const initialState: PlayerState = {
  playlist: null,
  currentlyPlaying: {
    position: 0,
    duration: 0,
    playingState: PlayingState.STOPPED,
    currentTrackId: null
  }
};

export type PlayerAction = ActionType<typeof playerActions>;

export default combineReducers<PlayerState, PlayerAction>({
  playlist: (state = initialState.playlist, action) => {
    switch (action.type) {
      case getType(setPlaylist): {
        return { ...state, ...action.payload };
      }
      default:
        return state;
    }
  },
  currentlyPlaying: (state = initialState.currentlyPlaying, action) => {
    switch (action.type) {
      case getType(setCurrentlyPlaying): {
        return { ...action.payload };
      }
      case getType(setDuration): {
        return { ...state, duration: action.payload };
      }
      case getType(setPosition): {
        return { ...state, position: action.payload };
      }
      case getType(setPlayingState): {
        return { ...state, playingState: action.payload };
      }
      case getType(setCurrentTrack): {
        return { ...state, currentTrackId: action.payload };
      }
      default:
        return state;
    }
  }
});
