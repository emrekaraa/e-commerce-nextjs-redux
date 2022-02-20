import React from "react";

const ProductList = ({ stars }) => {
  console.log(stars);
  return <div></div>;
};
ProductList.getInitialProps = async () => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count };
};
export default ProductList;
