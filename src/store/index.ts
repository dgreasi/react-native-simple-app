import { combineReducers } from '@reduxjs/toolkit';
import coreReducer from './core/coreSlice';
import postsReducer from './posts/postsSlice';

const rootReducer = combineReducers({
  core: coreReducer,
  posts: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
