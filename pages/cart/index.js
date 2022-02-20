import Header from "@/components/composite/Header";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cardProducts = useSelector((state) => state.CartReducer.cart);
  const dispatch = useDispatch();
  return (
    <>
      <Header />
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
  );
};

export default Cart;
