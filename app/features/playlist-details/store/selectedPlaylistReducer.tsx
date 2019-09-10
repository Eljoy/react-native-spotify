import { ActionType, getType } from 'typesafe-actions';
import { Reducer } from 'redux';
import Spotify from '../../../types/Spotify';
import { apiEnd, apiStart, resetPlaylist, setSelectedPlaylist } from './actions';
import { selectedPlaylistActions } from './index';

export type SelectedPlaylistState = Readonly<{
  isFetching: boolean;
  playlist: Spotify.Playlist;
  lastUpdated: number;
}>;

const initialState: SelectedPlaylistState = {
  isFetching: false,
  playlist: null,
  lastUpdated: -1
};

export type SelectedPlaylistAction = ActionType<typeof selectedPlaylistActions>;

const selectedPlaylistReducer: Reducer<
  SelectedPlaylistState,
  SelectedPlaylistAction
> = (state = initialState, action) => {
  switch (action.type) {
    case getType(setSelectedPlaylist): {
      return { ...state, playlist: { ...action.payload } };
    }
    case getType(resetPlaylist): {
      return { ...initialState };
    }
    case getType(apiStart): {
      return { ...state, isFetching: true };
    }
    case getType(apiEnd): {
      return { ...state, isFetching: false };
    }
    default:
      return state;
  }
};

export default selectedPlaylistReducer;
