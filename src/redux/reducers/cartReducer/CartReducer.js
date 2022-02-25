import {
  CART_ADD_PRODUCT,
  CART_REMOVE_PRODUCT,
  CART_QUANTITY_DECREASE,
  CART_QUANTITY_INCREASE,
} from "@/redux/types";

const initialState = { cart: [] };

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD_PRODUCT:
      return {
        ...state,
        cart: state.cart.find((cartItem) => cartItem.id === action.payload.id)
          ? state.cart.map((cartItem) =>
              cartItem.id === action.payload.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            )
          : [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case CART_REMOVE_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case CART_QUANTITY_DECREASE:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    case CART_QUANTITY_INCREASE:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    default:
      return state;
  }
};
