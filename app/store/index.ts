import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import TrackPlayerHandler from '../features/player/TrackPlayerHandler';
import { playerMiddleware } from '../features/player/store';
import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(playerMiddleware(new TrackPlayerHandler()))
  )
);

export default store;
