import Header from "@/components/composite/Header";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { parseCookies } from "nookies";
import {
  quantityDecrease,
  quantityIncrease,
} from "@/redux/actions/CartActions";

const Cart = () => {
  const cardProducts = useSelector((state) => state.CartReducer.cart);
  const isLoggedIn = useSelector((state) => state.LoginReducer.isLoggedIn);
  const cookies = parseCookies();

  const dispatch = useDispatch();

  return (
    <>
      <Header />
      {isLoggedIn || cookies.authToken ? (
        <>
          <div className="container mx-auto">
            <div className="flex items-center justify-center">
              <p className="text-2xl mt-5 border p-2 mx-2">
                Basket Total Price :{" "}
                {cardProducts.reduce((acc, item) => {
                  let productTotal = item.quantity * item.price;
                  return acc + productTotal;
                }, 0)}
                $
              </p>
              <p className="text-2xl mt-5 border p-2 mx-2">
                {cardProducts.length} products in the basket
              </p>

              <p className="text-2xl mt-5 border p-2 mx-2">
                {cardProducts.reduce((acc, item) => {
                  return acc + item.quantity;
                }, 0)}{" "}
                items in the basket
              </p>
            </div>
          </div>

          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-10">
            {cardProducts.map((item, index) => (
              <div
                className="border border-black p-2 flex flex-col items-center"
                key={index}
              >
                <img src={item.image} alt={item.name} />
                <h1 className="text-lg font-semibold">{item.name}</h1>
                <p>Category: {item.category}</p>
                <p>{item.price} $</p>
                <div className="flex items-center gap-2 my-5">
                  <button
                    onClick={() =>
                      item.quantity > 1 && dispatch(quantityDecrease(item))
                    }
                    className="py-0.5 px-2.5 rounded bg-gray-300 hover:bg-gray-400 "
                  >
                    -
                  </button>
                  <p className="font-semibold">
                    Total Quantity {item.quantity}{" "}
                  </p>
                  <button
                    onClick={() =>
                      item.quantity < 9 && dispatch(quantityIncrease(item))
                    }
                    className="py-0.5 px-2.5 rounded bg-gray-300 hover:bg-gray-400 "
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch({
                      type: "CART_REMOVE_PRODUCT",
                      payload: { id: item.id },
                    });
                  }}
                  className="p-2 bg-red-300 hover:bg-red-400"
                >
                  Remove from Card
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <h1 className="text-center text-3xl mt-5 text-red-500">Please Login</h1>
      )}
    </>
  );
};

export default Cart;
