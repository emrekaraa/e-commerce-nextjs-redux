import React from "react";
import axios from "axios";
import Header from "@/components/composite/Header";
import AddToCartBtn from "@/components/ui/buttons/AddToCartBtn";
import { useSelector } from "react-redux";
import { wrapper } from "@/redux/store";
import { GET_PRODUCTS } from "@/redux/api/getProducts/getProducts";
import { addToCart } from "@/redux/actions/CartActions";
import { useDispatch } from "react-redux";
import { FETCH_PRODUCTS } from "@/redux/types";

const ProductDetail = () => {
  const productDetail = useSelector((state) => state.fetchProductsReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <Header />

      <div className="flex justify-center mt-10">
        {productDetail &&
          productDetail.map((product) => (
            <div
              className="p-5 flex flex-col items-center border border-black"
              key={product.id}
            >
              <img width={300} src={product.image} alt={product.image} />
              <h1 className="font-semibold text-lg">{product.name}</h1>
              <p>Category: ({product.category})</p>
              <p className="text-red-600">{product.price} $</p>
              <span onClick={() => dispatch(addToCart(product))}>
                <AddToCartBtn />
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductDetail;

ProductDetail.getInitialProps = wrapper.getInitialPageProps(
  (store) =>
    async ({ query }) => {
      try {
        const fetchProducts = () => {
          return async (dispatch) => {
            return axios.get(GET_PRODUCTS + "/" + query.id).then((res) => {
              dispatch({
                type: FETCH_PRODUCTS,
                payload: [{ ...res.data }],
              });
            });
          };
        };
        await store.dispatch(fetchProducts());
      } catch (error) {
        console.log(error);
      }
    }
);
