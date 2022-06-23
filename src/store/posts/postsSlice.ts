import { IPostsSlice, IPostsState, SetPostsPayload } from './postsSlice.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SetBooleanPayload } from '~interfaces/store.interface';

const initialState: IPostsState = {
  loading: false,
  posts: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPostsLoading: (state: IPostsState, action: PayloadAction<SetBooleanPayload>): void => {
      state.loading = action.payload.value;
    },
    setPosts: (state: IPostsState, action: PayloadAction<SetPostsPayload>): void => {
      state.posts = action.payload.posts;
    },
    resetPosts: (): IPostsState => initialState,
  },
});

//////////////////////////////// ACTIONS ////////////////////////////////
export const { setPostsLoading, setPosts, resetPosts } = postsSlice.actions;

//////////////////////////////// SELECTORS ////////////////////////////////
export const selectPostsLoading = (state: IPostsSlice): boolean => state.posts.loading;
export const selectPosts = (state: IPostsSlice): any[] => state.posts.posts;

export default postsSlice.reducer;
