// eslint-disable-next-line import/no-unresolved
import { AppTypes } from '../../../store/types';

export const getSelectedPlaylist = (state: AppTypes.RootState) =>
  state.selectedPlaylist;
