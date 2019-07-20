import { connect } from 'react-redux';
import NoteFilter from './NoteFilter';

import { noteActions, noteSelectors } from '../../modules/notes';

const mapStateToProps = state => ({
  value: noteSelectors.getFilter(state)
});

const mapDispatchToProps = {
  onChange: noteActions.onFilterChange
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteFilter);
