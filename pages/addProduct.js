import Header from "@/components/composite/Header";
import React, { useState } from "react";
import axios from "axios";
import { ROOT_URL } from "@/redux/api/constants";
import { useSelector } from "react-redux";
import { parseCookies } from "nookies";

const addProduct = () => {
  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState(1);

  const isLoggedIn = useSelector((state) => state.LoginReducer.isLoggedIn);
  const cookies = parseCookies();

  const onSubmit = () => {
    if (category && productName && price) {
      axios.post(`${ROOT_URL}/products`, {
        category,
        name: productName,
        image: imageUrl
          ? imageUrl
          : "https://www.pbxsangoma.com/front/template/default/public/image/icon/none-img.png",
        price,
      });
      setCategory("");
      setProductName("");
      setImageUrl("");
      setPrice(1);
      alert("Product added successfully");
    } else {
      alert("Please fill all the fields");
    }
  };
  return (
    <>
      <Header />
      {isLoggedIn || cookies.authToken ? (
        <div className="container mx-auto max-w-sm px-2 mt-10">
          <div className="px-6 py-8 rounded shadow-2xl text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Add Product</h1>

            <input
              type="text"
              className="block border w-full p-3 rounded mb-4"
              name="category"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />

            <input
              type="text"
              className="block border w-full p-3 rounded mb-4"
              name="product-name"
              placeholder="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="image"
              placeholder="Image url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />

            <input
              type="number"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="Price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <button
              onClick={(e) => onSubmit(e)}
              type="submit"
              className="w-full py-3 rounded bg-green-300 hover:bg-green-400"
            >
              Add Product
            </button>
          </div>
        </div>
      ) : (
        <h1 className="text-center text-3xl mt-5 text-red-500">
          Please login to add product
        </h1>
      )}
    </>
  );
};

export default addProduct;
