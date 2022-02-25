import { FETCH_PRODUCTS } from "@/redux/types";
import { GET_PRODUCTS } from "@/redux/api/getProducts/getProducts";
import axios from "axios";

export const fetchProducts = () => {
  return async (dispatch) => {
    return axios.get(GET_PRODUCTS).then((res) => {
      dispatch({
        type: FETCH_PRODUCTS,
        payload: res.data,
      });
    });
  };
};

export const fetchProduct = (query) => {
  return async (dispatch) => {
    return axios.get(GET_PRODUCTS + "/" + query.id).then((res) => {
      dispatch({
        type: FETCH_PRODUCTS,
        payload: [{ ...res.data }],
      });
    });
  };
};
