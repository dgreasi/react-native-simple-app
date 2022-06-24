import { IPost } from '~interfaces/post.interface';

export interface IPostsState {
  loading: boolean;
  posts: IPost[];
  page: number;
  hasMore: boolean;
  isRefetching: boolean;
}

export interface IPostsSlice {
  posts: IPostsState;
}

export interface SetPostsPayload {
  posts: IPost[];
}
