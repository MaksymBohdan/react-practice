import { connect } from 'react-redux';
import PostListView from './PostListView';
// import * as actions from '../../redux/actions';
import { getPostsWithAuthor } from '../../redux/selectors';
import { deletePost } from '../../redux/actions';

const mapState = state => ({
  posts: getPostsWithAuthor(state)
});

const mapDispatch = {
  deletePost: deletePost,
};

export default connect(
  mapState,
  mapDispatch
)(PostListView);
