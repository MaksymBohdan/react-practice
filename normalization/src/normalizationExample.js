// import { normalize, schema } from 'normalizr';
// import denormalizedPosts from './posts';

// const authorSchema = new schema.Entity('author');

// const postsSchema = new schema.Entity('posts', {
//   author: authorSchema
// });

// const normalizedPosts = normalize(denormalizedPosts, [postsSchema]);
// console.log('denormalizedPosts', denormalizedPosts);
// console.log('normalizedPosts', normalizedPosts);

// // ------------------------------------------
// const blogPosts = [
//   {
//     id: 'post1',
//     author: { username: 'user1', name: 'User 1' },
//     body: '......',
//     comments: [
//       {
//         id: 'comment1',
//         author: { username: 'user2', name: 'User 2' },
//         comment: '.....'
//       },
//       {
//         id: 'comment2',
//         author: { username: 'user3', name: 'User 3' },
//         comment: '.....'
//       }
//     ]
//   },
//   {
//     id: 'post2',
//     author: { username: 'user2', name: 'User 2' },
//     body: '......',
//     comments: [
//       {
//         id: 'comment3',
//         author: { username: 'user3', name: 'User 3' },
//         comment: '.....'
//       },
//       {
//         id: 'comment4',
//         author: { username: 'user1', name: 'User 1' },
//         comment: '.....'
//       },
//       {
//         id: 'comment5',
//         author: { username: 'user3', name: 'User 3' },
//         comment: '.....'
//       }
//     ]
//   }
// ];

// const authorSchema = new schema.Entity('authors', {}, { idAttribute: 'username' });
// const commentsSchema = new schema.Entity('comments', { author: authorSchema });
// const blogSchema = new schema.Entity('blogs', {
//   author: authorSchema,
//   comments: [commentsSchema]
// });
// const normalizedPosts = normalize(blogPosts, [blogSchema]);
// console.log(normalizedPosts);
