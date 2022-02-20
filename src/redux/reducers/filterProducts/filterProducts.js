import { FILTER_PRODUCTS } from "@/redux/types";

const initialState = {};

export const FilterProducts = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_PRODUCTS:
      return [...action.payload];

    default:
      return state;
  }
};
