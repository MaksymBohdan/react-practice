import { combineReducers } from 'redux';
import entityReducer from './entityReducer';
import postReducer from './postReducer';
import authorReducer from './authorReducer';

export default combineReducers({
  entities: entityReducer,
  posts: postReducer,
  authors: authorReducer,
});
