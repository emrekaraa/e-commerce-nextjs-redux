import { combineReducers } from "redux";
import { fetchProductsReducer } from "./fetchProducts/fetchProductsReducer";
import { CartReducer } from "./cartReducer/CartReducer";
import { FilterProducts } from "./filterProducts/filterProducts";
import { LoginReducer } from "./loginReducer/loginReducer";
import { LoginUserInfoReducer } from "./userReducer/userReducer";
export const rootReducer = combineReducers({
  fetchProductsReducer,
  CartReducer,
  FilterProducts,
  LoginReducer,
  LoginUserInfoReducer,
});
