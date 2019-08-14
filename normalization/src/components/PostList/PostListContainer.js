import { connect } from 'react-redux';
import PostListView from './PostListView';
// import * as actions from '../../redux/actions';
import { getPostsWithAuthor } from '../../redux/selectors';

const mapState = state => ({
    posts: getPostsWithAuthor(state)
});

const mapDispatch = {};

export default connect(
  mapState,
  mapDispatch
)(PostListView);
