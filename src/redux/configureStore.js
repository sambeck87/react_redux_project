import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionReducer from './mission/mission';

const store = configureStore({
  reducer: {
    missionReducer,
  },
}, applyMiddleware(thunk, logger));

export default store;
