import {ADD_TO_CART} from './ActionType';

export const addItemToCart = data => ({
  type: ADD_TO_CART,
  payload: data,
});
