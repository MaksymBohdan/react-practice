// import shortid from 'shortid';
import types from './noteActionTypes';

//for async
const fetchStart = () => ({
  type: types.FETCH_REQUEST
});

const fetchSuccess = text => ({
  type: types.FETCH_SUCCESS,
  payload: text
});

const fetchFailed = error => ({
  type: types.fetchFailed,
  payload: error
});

const addSuccess = text => ({
  type: types.ADD_SUCCESS,
  payload: text
});

const deleteSuccess = id => ({
  type: types.DELETE_SUCCESS,
  payload: id
});

const onFilterChange = filter => ({
  type: types.CHANGE_FILTER,
  payload: filter
});

const toggleNoteSuccess = data => ({
  type: types.TOGGLE_COMPLETED_SUCCESS,
  payload: data,
})

export default {
  onFilterChange,
  fetchStart,
  fetchSuccess,
  fetchFailed,
  addSuccess,
  deleteSuccess,
  toggleNoteSuccess
};

//sync actions
// const addNote = text => ({
//   type: types.ADD,
//   payload: { id: shortid.generate(), text, completed: false }
// });

// const deleteNote = id => ({
//   type: types.DELETE,
//   payload: id
// });

// const toggleNote = id => ({
//   type: types.TOGGLE_COMPLETED,
//   payload: id
// });

// export default { addNote, deleteNote, toggleNote, onFilterChange};
