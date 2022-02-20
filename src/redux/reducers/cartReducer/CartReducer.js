import { CART_ADD_PRODUCT, CART_REMOVE_PRODUCT } from "@/redux/types";

const initialState = { cart: [] };

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD_PRODUCT:
      return { ...state, cart: [...state.cart, action.payload] };

    case CART_REMOVE_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};
