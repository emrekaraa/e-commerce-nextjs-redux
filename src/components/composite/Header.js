import { menuItems } from "@/data/index.js";
import { AddUserIcon, LoginIcon, ShoppingCartIcon } from "@/commons/index";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { isLoggedIn } from "@/redux/actions/LoginActions";
import { destroyCookie, parseCookies } from "nookies";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Header = () => {
  const cardProducts = useSelector((state) => state.CartReducer);
  const isLoggedInState = useSelector((state) => state.LoginReducer.isLoggedIn);

  const cookies = parseCookies();

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (cookies.authToken) {
      dispatch(isLoggedIn(true));
    }
  }, []);

  return (
    <header className="bg-slate-800 text-white ">
      <div className="container mx-auto flex justify-center py-3 md:justify-between items-center min-h-[100px] flex-wrap">
        {/* Logo */}
        <Link href="/">
          <h1 className="font-semibold text-2xl text-orange-400 cursor-pointer">
            E-Commerce Store
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
        <div className="flex flex-col items-center">
          <div className="flex">
            {isLoggedInState ? (
              <button
                onClick={() => {
                  dispatch(isLoggedIn(false));
                  destroyCookie(null, "authToken");
                  router.reload();
                }}
                className="flex items-center py-2 px-5 border mx-1 rounded hover:bg-white hover:border-black hover:text-black"
              >
                <LoginIcon className="w-5 mr-2" fill="orange" />
                Log Out
              </button>
            ) : (
              <Link href="/login">
                <button className="flex items-center py-2 px-5 border mx-1 rounded hover:bg-white hover:border-black hover:text-black">
                  <LoginIcon className="w-5 mr-2" fill="orange" />
                  Login
                </button>
              </Link>
            )}

            {!isLoggedInState && (
              <Link href="/register">
                <button className="flex items-center  py-2 px-5 border mx-1 rounded hover:bg-white hover:border-black hover:text-black">
                  <AddUserIcon className="w-5 mr-2" fill="orange" />
                  Register
                </button>
              </Link>
            )}

            {isLoggedInState && (
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
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
