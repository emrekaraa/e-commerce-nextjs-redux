import {
  CART_ADD_PRODUCT,
  CART_REMOVE_PRODUCT,
  CART_QUANTITY_DECREASE,
  CART_QUANTITY_INCREASE,
} from "../types";

export const addToCart = (product) => ({
  type: CART_ADD_PRODUCT,
  payload: product,
});

export const removeFromCart = (id) => ({
  type: CART_REMOVE_PRODUCT,
  payload: id,
});

export const quantityIncrease = (product) => ({
  type: CART_QUANTITY_INCREASE,
  payload: product,
});

export const quantityDecrease = (product) => ({
  type: CART_QUANTITY_DECREASE,
  payload: product,
});
