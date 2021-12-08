import {
  SET_CATALOG,
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_OF_REFERENCE_FROM_CART,
  CLEAR_CART,
} from './actions';

const initialState = {
  cart: [],
  catalog: {},
};

function rootReducer(state = initialState, action = () => {}) {
  switch (action.type) {
    case SET_CATALOG:
      return {
        ...state,
        catalog: { ...action.payload },
      };

    case ADD_TO_CART:
      return {
        ...state,
        cart: [
          ...state.cart.filter(p => p.reference !== action.product.reference),
          {
            ...action.product,
            qty:
              (state.cart.find(p => p.reference === action.product.reference)?.qty || 0) +
              1,
          },
        ],
      };

    case REMOVE_ONE_FROM_CART: {
      const cartProduct = state.cart.find(p => p.reference === action.reference);
      const newCart = state.cart.filter(p => p.reference !== action.reference);

      if (cartProduct.qty > 1) {
        newCart.push({
          ...cartProduct,
          qty: cartProduct.qty - 1,
        });
      }

      return {
        ...state,
        cart: newCart,
      };
    }

    case REMOVE_ALL_OF_REFERENCE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter(p => p.reference !== action.reference),
      };
    }

    case CLEAR_CART:
      return {
        ...state,
        cart: initialState.cart,
      };

    default:
      return state;
  }
}

export default rootReducer;
