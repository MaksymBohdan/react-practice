export const actionTypes = {
  ADD_TO_CART: 'cart/ADD_TO_CART',
  REMOVE_FROM_CART: 'cart/REMOVE_FROM_CART',
  PLUS_ONE_ITEM: 'PLUS_ONE_ITEM',
  MINUS_ONE_ITEM: 'MINUS_ONE_ITEM'
};

export const addToCart = id => ({
  type: actionTypes.ADD_TO_CART,
  payload: {
    id
  }
});

export const removeFromCart = id => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: {
    id
  }
});

export const plusOneItem = id => ({
  type: actionTypes.PLUS_ONE_ITEM,
  payload: {
    id
  }
});

export const minusOneItem = id => ({
  type: actionTypes.MINUS_ONE_ITEM,
  payload: {
    id
  }
});
