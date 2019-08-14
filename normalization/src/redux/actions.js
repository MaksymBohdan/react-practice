import { normalize } from 'normalizr';
import { postsSchema } from './schemas';

export const actionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  SELECT_AUTHOR: 'SELECT_AUTHOR'
};

export const fetchPosts = denormalizePosts => {
  const normalizedPosts = normalize(denormalizePosts, [postsSchema]);
  console.log(normalizedPosts);
  return {
    type: actionTypes.FETCH_POSTS,
    payload: {
      ids:{
        posts: Object.keys(normalizedPosts.entities.posts),
        authors: Object.keys(normalizedPosts.entities.author),
      },
      entities: normalizedPosts.entities,
    }
  };
};

export const selectAuthor = id => ({
  type: actionTypes.SELECT_AUTHOR,
  payload: id
});
