import { createSelector } from 'reselect';

const getAuthorIds = state => state.authors.ids;
export const getSelectedId = state => state.authors.selectedIds;

const getAuthorEntities = state => state.entities.author;

// export const getAllAuthors = state => {
//   const ids = getAuthorIds(state);
//   const entities = getAuthorEntities(state);

//   return ids.map(id => entities[id]);
// };

export const getAllAuthors = createSelector(
  [getAuthorIds, getAuthorEntities],
  (ids, entities) => ids.map(id => entities[id])
);

const getPostEntities = state => state.entities.posts;
const getPostIds = state => state.posts;
export const getPostsWithAuthor = createSelector(
  [getSelectedId, getPostIds, getPostEntities],
  (authorId, postIds, postEntities) =>
    postIds.reduce((acc, postId) => {
      const post = postEntities[postId];
      if (post.author === authorId) acc.push(post);
      return acc;
    }, [])
);
// export const getPostsWithAuthor = state => {
//   const authorId = getSelectedId(state);
//   const postIds = getPostIds(state);
//   const postEntities = getPostEntities(state);
//   // const posts = [];

//   // postIds.forEach(postId => {
//   //   const post = postEntities[postId];
//   //   if (post.author === authorId) {
//   //     posts.push(post);
//   //   }
//   // });

//   const posts = postIds.reduce((acc, postId) => {
//     const post = postEntities[postId];
//     if (post.author === authorId) acc.push(post);
//     return acc;
//   }, []);

//   return posts;
// };
