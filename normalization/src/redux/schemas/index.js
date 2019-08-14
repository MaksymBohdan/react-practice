import { schema } from 'normalizr';

const authorSchema = new schema.Entity('author');
export const postsSchema = new schema.Entity('posts', {
  author: authorSchema
});
