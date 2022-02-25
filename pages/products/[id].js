import React from "react";
import axios from "axios";
import Header from "@/components/composite/Header";
import AddToCartBtn from "@/components/ui/buttons/AddToCartBtn";
import { useSelector } from "react-redux";
import { wrapper } from "@/redux/store";
import { fetchProduct } from "@/redux/api/getProducts/getProductsCall";
import { addToCart } from "@/redux/actions/CartActions";
import { useDispatch } from "react-redux";
import { parseCookies } from "nookies";

const ProductDetail = () => {
  const productDetail = useSelector((state) => state.fetchProductsReducer);
  const isLoggedIn = useSelector((state) => state.LoginReducer.isLoggedIn);
  const dispatch = useDispatch();
  const cookies = parseCookies();
  return (
    <>
      <Header />
      {isLoggedIn || cookies.authToken ? (
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
      ) : null}
    </>
  );
};

export default ProductDetail;

ProductDetail.getInitialProps = wrapper.getInitialPageProps(
  (store) =>
    async ({ query }) => {
      await store.dispatch(fetchProduct(query));
    }
);
