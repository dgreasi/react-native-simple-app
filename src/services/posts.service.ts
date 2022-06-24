import { IGetPostsResponse } from '~interfaces/dto/posts.dto';
import { sleep } from '~utils/general';
import { posts } from '~data/data';

// Default Mock limit of page
const LIMIT = 10;

export const getPostsService = async (page: number): Promise<IGetPostsResponse> => {
  return simulateRequest(page);
};

const simulateRequest = async (page: number): Promise<IGetPostsResponse> => {
  // Simulate 2 seconds delay from request
  await sleep(2000);

  const postsLength = posts.length;
  const maxPage = Math.ceil(postsLength / LIMIT);

  // Invalid page argument
  if (page > maxPage) {
    return {
      posts: [],
      meta: {
        page,
        hasMore: false,
      },
    };
  }

  // Page is valid
  const startOfPage = page * LIMIT - LIMIT;
  const endOfPage = page * LIMIT;
  const postsOfPage = posts.slice(startOfPage, endOfPage);

  return {
    posts: postsOfPage,
    meta: {
      page,
      hasMore: page < maxPage,
    },
  };
};
