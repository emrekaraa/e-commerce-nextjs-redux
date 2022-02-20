import { CART_ADD_PRODUCT } from "../types";
import { CART_REMOVE_PRODUCT } from "../types";

export const addToCart = (product) => ({
  type: CART_ADD_PRODUCT,
  payload: product,
});

export const removeFromCart = (id) => ({
  type: CART_REMOVE_PRODUCT,
  payload: id,
});
