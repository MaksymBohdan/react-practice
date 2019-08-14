import {actionTypes} from '../actions';

export default function postReducer(state=[], {type, payload}){
  switch(type){
    case actionTypes.FETCH_POSTS:
      return payload.ids.posts;
  }
  return state;
}