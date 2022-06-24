import { IAuthor } from '~interfaces/author.interface';

export interface IPost {
  id: number;
  author: IAuthor;
  body: string;
}
