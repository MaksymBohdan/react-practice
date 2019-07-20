import { connect } from 'react-redux';
import NoteList from './NoteList';
// import { getItems } from '../../modules/notes/notesSelectors';
// import { deleteNote } from '../../modules/notes/notesActions';

import { noteSelectors, noteActions } from '../../modules/notes';

const mapStateToProps = state => ({notes : noteSelectors.getVibleNotes(state)});

const mapDispatchToProps = {
  deleteNote: noteActions.deleteNote,
  toggleNote: noteActions.toggleNote
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList);
