import { FETCH_PRODUCTS } from "../../types";

const initialState = [];

export const fetchProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return [...action.payload];
    default:
      return state;
  }
};
