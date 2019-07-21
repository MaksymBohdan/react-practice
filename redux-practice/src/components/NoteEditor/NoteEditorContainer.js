import { connect } from 'react-redux';
import NoteEditor from './NoteEditor';

import { noteOperations } from '../../modules/notes';

const mapDispatchToProps = { addNote: noteOperations.addNote };

export default connect(
  null,
  mapDispatchToProps
)(NoteEditor);
