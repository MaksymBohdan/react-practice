import { connect } from 'react-redux';
import AuthorListView from './AuthorListView';
import { getAllAuthors, getSelectedId } from '../../redux/selectors';
import { selectAuthor } from '../../redux/actions';
const mapState = state => ({
  authors: getAllAuthors(state),
  activeAuthorId: getSelectedId(state)
});

export default connect(
  mapState,
  { selectAuthor }
)(AuthorListView);
