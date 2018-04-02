import { CART_ADDED, CART_REMOVED, CART_CLEARED } from '../constants';

let cart = {
  items: null
}

export default (state = cart, action) => {
  switch (action.type) {
    case CART_ADDED:
      const { items } = action;
      cart = {
        items
      }
      return cart;
    case CART_REMOVED:
    case CART_CLEARED:
    default:
      return state;
  }
}
