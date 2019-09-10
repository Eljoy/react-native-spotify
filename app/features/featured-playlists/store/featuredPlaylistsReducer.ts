import { ActionType, getType } from 'typesafe-actions';
import { Reducer } from 'redux';
import Spotify from '../../../types/Spotify';
import { featuredPlaylistActions } from './index';
import { apiEnd, apiStart, setFeaturedPlaylists } from './actions';

export type FeaturedPlaylistsState = Readonly<{
  isFetching: boolean;
  playlists: Spotify.PlaylistPreview[];
  lastUpdated: number;
}>;

const initialState: FeaturedPlaylistsState = {
  isFetching: false,
  playlists: [],
  lastUpdated: -1
};

export type FeaturedPlaylistsAction = ActionType<
  typeof featuredPlaylistActions
>;

const featuredPlaylistsReducer: Reducer<
  FeaturedPlaylistsState,
  FeaturedPlaylistsAction
> = (state = initialState, action: FeaturedPlaylistsAction) => {
  switch (action.type) {
    case getType(setFeaturedPlaylists):
      return { ...state, playlists: [...action.payload] };
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

export default featuredPlaylistsReducer;
