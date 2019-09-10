// eslint-disable-next-line import/no-unresolved
import { AppTypes } from '../../../store/types';

export const getFeaturedPlaylists = (state: AppTypes.RootState) =>
  state.featuredPlaylists;
