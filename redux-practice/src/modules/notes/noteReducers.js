import { combineReducers } from 'redux';
import types from './noteActionTypes';

function noteReducers(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload;

    case types.ADD_SUCCESS:
      return [...state, payload];

    case types.DELETE_SUCCESS:
      return state.filter(el => el.id !== payload);

    case types.TOGGLE_COMPLETED_SUCCESS:
      return state.map(el => (el.id === payload.id ? { ...el, completed: payload.completed } : el));

    default:
      return state;
  }
}

function filterReducer(state = '', { type, payload }) {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
}

function loadingReducer(state = false, { type, payload }) {
  switch (type) {
    case types.FETCH_REQUEST:
      return true;

    case types.FETCH_SUCCESS:
    case types.FETCH_FAILED:
      return false;

    default:
      return state;
  }
}

function errorReducer(state = null, { type, payload }) {
  switch (type) {
    case type.FETCH_FAILED:
      return payload;

    case types.FETCH_REQUEST:
    case types.FETCH_SUCCESS:
      return null;

    default:
      return state;
  }
}

export default combineReducers({
  items: noteReducers,
  loading: loadingReducer,
  error: errorReducer,
  filter: filterReducer
});
