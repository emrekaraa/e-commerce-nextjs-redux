import { combineReducers } from "redux";
import { fetchProductsReducer } from "./fetchProducts/fetchProductsReducer";
import { CartReducer } from "./cartReducer/CartReducer";
import { FilterProducts } from "./filterProducts/filterProducts";
import { LoginReducer } from "./loginReducer/loginReducer";
export const rootReducer = combineReducers({
  fetchProductsReducer,
  CartReducer,
  FilterProducts,
  LoginReducer,
});
