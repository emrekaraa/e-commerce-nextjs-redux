import { combineReducers } from "redux";
import { fetchProductsReducer } from "./fetchProducts/fetchProductsReducer";
import { CartReducer } from "./cartReducer/CartReducer";
import { FilterProducts } from "./filterProducts/filterProducts";
export const rootReducer = combineReducers({
  fetchProductsReducer,
  CartReducer,
  FilterProducts,
});
