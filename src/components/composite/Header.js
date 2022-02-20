import { menuItems } from "@/data/index.js";
import { AddUserIcon, LoginIcon, ShoppingCartIcon } from "@/commons/index.js";
import { useSelector } from "react-redux";
import Link from "next/link";

const Header = () => {
  const cardProducts = useSelector((state) => state.CartReducer);

  return (
    <header className="bg-slate-800 text-white ">
      <div className="container mx-auto flex justify-center py-3 md:justify-between items-center min-h-[80px] flex-wrap">
        {/* Logo */}
        <Link href="/">
          <h1 className="font-semibold text-2xl text-orange-400 cursor-pointer">
            LA COLLECTION
          </h1>
        </Link>
        {/* Menu */}
        <ul className="flex">
          {menuItems.map((item) => (
            <li className="px-6 py-2 text-lg" key={item.name}>
              <Link href={item.path}>
                <a className="hover:text-orange-400">{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex">
          <Link href="/login">
            <button className="flex items-center py-2 px-5 border mx-1 rounded hover:bg-white hover:border-black hover:text-black">
              <LoginIcon className="w-5 mr-2" fill="orange" />
              Login
            </button>
          </Link>

          <Link href="/register">
            <button className="flex items-center  py-2 px-5 border mx-1 rounded hover:bg-white hover:border-black hover:text-black">
              <AddUserIcon className="w-5 mr-2" fill="orange" />
              Register
            </button>
          </Link>

          <Link href="/cart">
            <button className="flex items-center py-2 px-5 border mx-1 rounded hover:bg-white hover:border-black hover:text-black">
              <ShoppingCartIcon className="w-5 mr-2" fill="orange" />
              Cart
              {cardProducts.cart.length > 0 ? (
                <span className="text-red-500 ml-1">
                  ({cardProducts.cart.length})
                </span>
              ) : (
                <span className="ml-1">(0)</span>
              )}
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
