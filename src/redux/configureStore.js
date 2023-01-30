import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/Rockets';

const rootReducer = combineReducers({
  rocketReducer,
});

const store = configureStore({ reducer: { rootReducer } },
  applyMiddleware(thunk, logger));

export default store;
