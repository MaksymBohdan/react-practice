import axios from 'axios';
import actions from './noteActions';

const fetchNotes = () => dispatch => {
  dispatch(actions.fetchStart());

  axios
    .get('http://localhost:8000/notes')
    .then(({ data }) => dispatch(actions.fetchSuccess(data)))
    .catch(error => dispatch(actions.fetchFailed(error)));
};

const addNote = text => dispatch => {
  dispatch(actions.fetchStart());

  axios
    .post('http://localhost:8000/notes', { text, completed: false })
    .then(({ data }) => dispatch(actions.addSuccess(data)))
    .catch(error => dispatch(actions.fetchFailed(error)));
};

const deleteNote = id => dispatch => {
  dispatch(actions.fetchStart());

  axios
    .delete(`http://localhost:8000/notes/${id}`)
    .then(() => dispatch(actions.deleteSuccess(id)))
    .catch(error => dispatch(actions.fetchFailed(error)));
};

const toggleNote = data => dispatch => {
  const { id, completed: completedPrev, ...rest } = data;
  
  dispatch(actions.fetchStart());
  
  axios
    .put(`http://localhost:8000/notes/${id}`, { id, completed: !completedPrev, ...rest })
    .then(({ data }) => dispatch(actions.toggleNoteSuccess(data)))
    .catch(error => dispatch(actions.fetchFailed(error)));
};

export default { fetchNotes, addNote, deleteNote, toggleNote };
