import { ShoppingCartIcon } from "@/commons/index";

const AddToCartBtn = () => {
  return (
    <button className="flex items-center p-2 my-2 bg-gray-200 border border-black hover:bg-gray-300">
      <ShoppingCartIcon className="mr-0.5" /> Add to Cart
    </button>
  );
};

export default AddToCartBtn;
