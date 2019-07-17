import { combineReducers } from 'redux';

function noteReducers(state = [], { type, payload }) {
  return state;
}

function filterReducer(state = '', { type, payload }) {
  return state;
}

export default combineReducers({
  items: noteReducers,
  filter: filterReducer
});
