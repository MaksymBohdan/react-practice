import { actionTypes } from '../actions';
import { combineReducers } from 'redux';

function ids(state = [], { type, payload }) {
  switch (type) {
    case actionTypes.FETCH_POSTS:
      return payload.ids.authors;
    default:
      return state;
  }
}

function selectedIds(state = null, { type, payload }) {
  switch (type) {
    case actionTypes.SELECT_AUTHOR:
      return payload;
    default:
      return state;
  }
}

export default combineReducers({
  ids,
  selectedIds
});
