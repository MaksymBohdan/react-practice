import { connect } from 'react-redux';
import NoteEditor from './NoteEditor';

import { noteActions } from '../../modules/notes';

const mapDispatchToProps = { addNote: noteActions.addNote };

export default connect(
  null,
  mapDispatchToProps
)(NoteEditor);
