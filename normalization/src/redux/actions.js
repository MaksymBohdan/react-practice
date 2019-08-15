import { normalize } from 'normalizr';
import { postsSchema } from './schemas';

export const actionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  SELECT_AUTHOR: 'SELECT_AUTHOR',
  DELETE_POST: 'DELETE_POST'
};

export const fetchPosts = denormalizePosts => {
  const normalizedPosts = normalize(denormalizePosts, [postsSchema]);
  return {
    type: actionTypes.FETCH_POSTS,
    payload: {
      ids: {
        posts: Object.keys(normalizedPosts.entities.posts),
        authors: Object.keys(normalizedPosts.entities.author)
      },
      entities: normalizedPosts.entities
    }
  };
};

export const selectAuthor = id => ({
  type: actionTypes.SELECT_AUTHOR,
  payload: id
});

export const deletePost = id => ({
  type: actionTypes.DELETE_POST,
  payload: id
});
