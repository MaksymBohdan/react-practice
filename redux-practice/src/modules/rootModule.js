import { combineReducers } from 'redux';

import noteReducers from './notes/noteReducers';

export default combineReducers({
  notes: noteReducers
});
