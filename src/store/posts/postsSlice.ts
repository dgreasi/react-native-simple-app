import { IPostsSlice, IPostsState, SetPostsPayload } from './postsSlice.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SetBooleanPayload, SetNumberPayload } from '~interfaces/store.interface';
import { AppDispatch, AppThunk, RootStoreInterface } from '~store/store';
import { getPostsService } from '~services/posts.service';
import { batch } from 'react-redux';
import { IPost } from '~interfaces/post.interface';

const initialState: IPostsState = {
  loading: true,
  posts: [],
  page: 1,
  hasMore: true,
  isRefetching: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPostsLoading: (state: IPostsState, action: PayloadAction<SetBooleanPayload>): void => {
      state.loading = action.payload.value;
    },
    updatePosts: (state: IPostsState, action: PayloadAction<SetPostsPayload>): void => {
      state.posts = [...state.posts, ...action.payload.posts];
    },
    setPosts: (state: IPostsState, action: PayloadAction<SetPostsPayload>): void => {
      state.posts = action.payload.posts;
    },
    setPostsPage: (state: IPostsState, action: PayloadAction<SetNumberPayload>): void => {
      state.page = action.payload.value;
    },
    setHasMorePosts: (state: IPostsState, action: PayloadAction<SetBooleanPayload>): void => {
      state.hasMore = action.payload.value;
    },
    setIsRefetching: (state: IPostsState, action: PayloadAction<SetBooleanPayload>): void => {
      state.isRefetching = action.payload.value;
    },
    resetPosts: (): IPostsState => initialState,
  },
});

//////////////////////////////// USER ASYNC ACTIONS ////////////////////////////////

export const getPostsAsync =
  (): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootStoreInterface): Promise<void> => {
    const { page, hasMore } = getState().posts;

    // No more posts
    if (!hasMore) return;
    dispatch(setPostsLoading({ value: true }));

    // Get new posts
    const resp = await getPostsService(page);

    // Dispatch actions together to prevent unneeded re-renders
    batch(() => {
      dispatch(setPostsPage({ value: page + 1 }));
      dispatch(setHasMorePosts({ value: resp.meta.hasMore }));
      dispatch(updatePosts({ posts: resp.posts }));
      dispatch(setPostsLoading({ value: false }));
    });
  };

export const getLatestPostsAsync =
  (): AppThunk =>
  async (dispatch: AppDispatch): Promise<void> => {
    dispatch(setIsRefetching({ value: true }));
    // Get new posts
    const resp = await getPostsService(1);

    // Dispatch actions together to prevent unneeded re-renders
    batch(() => {
      dispatch(setPostsPage({ value: 2 }));
      dispatch(setHasMorePosts({ value: resp.meta.hasMore }));
      dispatch(setPosts({ posts: resp.posts }));
      dispatch(setIsRefetching({ value: false }));
    });
  };

//////////////////////////////// ACTIONS ////////////////////////////////
export const { setPostsLoading, updatePosts, setPosts, setPostsPage, setHasMorePosts, setIsRefetching, resetPosts } =
  postsSlice.actions;

//////////////////////////////// SELECTORS ////////////////////////////////
export const selectPostsLoading = (state: IPostsSlice): boolean => state.posts.loading;
export const selectPosts = (state: IPostsSlice): IPost[] => state.posts.posts;
export const selectPostsRefetching = (state: IPostsSlice): boolean => state.posts.isRefetching;

export default postsSlice.reducer;
