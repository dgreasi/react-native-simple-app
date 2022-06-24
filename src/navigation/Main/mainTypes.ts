import { IPost } from '~interfaces/post.interface';
import { IAuthor } from '~interfaces/author.interface';

export enum MAIN_ROUTES {
  HOME = 'Home',
  POST = 'Post',
  PROFILE = 'Profile',
}

export type MainRoutes = {
  Home: undefined;
  Post: { post: IPost };
  Profile: { author: IAuthor };
};
