import { FILTER_PRODUCTS } from "../types";

export const filterProducts = (category) => ({
  type: FILTER_PRODUCTS,
  payload: category,
});
