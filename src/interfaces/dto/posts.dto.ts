import { IThrowError } from '~interfaces/dto/shared.dto';

export interface IGetPostsResponse extends IThrowError {
  posts: any[];
  meta: {
    page: number;
    hasMore: boolean;
  };
}
