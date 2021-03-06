import { connect } from 'react-redux';
import CartView from './CartView';
import * as selectors from '../../redux/selectors';
import * as actions from '../../redux/actions';

const mapState = state => ({ products: selectors.getCartProducts(state) });

const mapDispatch = {
  removeFromCart: actions.removeFromCart,
  plusOneItem: actions.plusOneItem,
  minusOneItem: actions.minusOneItem
};

export default connect(
  mapState,
  mapDispatch
)(CartView);
