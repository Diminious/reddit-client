import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import redditReducer from './redditSlice'

const store = configureStore({
  reducer: combineReducers({
    reddit: redditReducer
  }),
});

export default store;
