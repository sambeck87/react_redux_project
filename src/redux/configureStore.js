import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './mission/mission';

const store = configureStore({
  reducer: {
    missionsReducer,
  },
}, applyMiddleware(thunk, logger));

export default store;
