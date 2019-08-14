const getAuthorIds = state => state.authors.ids;
export const getSelectedId = state => state.authors.selectedIds;

const getAuthorEntities = state => state.entities.author;

export const getAllAuthors = state => {
  const ids = getAuthorIds(state);
  const entities = getAuthorEntities(state);

  return ids.map(id => entities[id]);
};

const getPostEntities = state => state.entities;
const getPostIds = state => state.posts;

export const getPostsWithAuthor = state => {
  const authorId = getSelectedId(state);
  const postIds = getPostIds(state);
  const postEntities = getPostEntities(state);
  console.log('postIds', postIds);
  console.log('postEntities', postEntities);

  const posts = [];

  postIds.forEach(postId => {
    const post = postEntities[postId];
    if (post.author === authorId) {
      posts.push(post);
    }
  });

  console.log(posts);
  return posts;
};
