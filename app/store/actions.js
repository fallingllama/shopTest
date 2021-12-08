export const SET_CATALOG = 'SET_CATALOG';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';

export const setCatalog = payload => ({ type: SET_CATALOG, payload });
export const addOneToCart = product => ({ type: ADD_TO_CART, product });
export const removeFromCart = reference => ({ type: REMOVE_FROM_CART, reference });
export const clearCart = () => ({ type: CLEAR_CART });
