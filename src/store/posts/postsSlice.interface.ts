export interface IPostsState {
  loading: boolean;
  posts: any[];
}

export interface IPostsSlice {
  posts: IPostsState;
}

export interface SetPostsPayload {
  posts: any[];
}
