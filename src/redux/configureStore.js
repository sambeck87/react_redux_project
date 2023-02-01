import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/Rockets';
import dragonsSlice from './dragons/Dragons';
import missionReducer from './mission/mission';

const store = configureStore({
  reducer: {
    missionReducer,
    rocketReducer,
    dragonsSlice,
  },
}, applyMiddleware(thunk, logger));

export default store;
