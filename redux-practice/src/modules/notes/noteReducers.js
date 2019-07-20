import { combineReducers } from 'redux';
import types from './noteActionTypes';

function noteReducers(state = [], { type, payload }) {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    case types.DELETE:
      return state.filter(el => el.id !== payload);

      case types.TOGGLE_COMPLETED: 
      return state.map(el => el.id === payload ? {...el, completed: !el.completed}: el )
      
    default:
      return state;
  }
}

function filterReducer (state = '', {type, payload}) {
  switch(type){
    case types.CHANGE_FILTER:
      return payload;

      default:
        return state;
  }
}

export default combineReducers({
  items: noteReducers,
  filter: filterReducer,
});
