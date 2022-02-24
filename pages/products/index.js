import Header from "@/components/composite/Header";
import axios from "axios";
import Link from "next/link";
import AddToCartBtn from "@/components/ui/buttons/AddToCartBtn";
import { wrapper } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { GET_PRODUCTS } from "@/redux/api/getProducts/getProducts";
import { addToCart } from "@/redux/actions/CartActions";
import { FETCH_PRODUCTS } from "@/redux/types";
import { filterProducts } from "@/redux/actions/FilterActions";

const Products = () => {
  const data = useSelector((state) => state.fetchProductsReducer);
  const isLoggedIn = useSelector((state) => state.LoginReducer.isLoggedIn);
  const dispatch = useDispatch();

  const filteredProducts = useSelector((state) => state.FilterProducts);

  const uniqueCategories = Array.from(new Set(data.map((a) => a.category))).map(
    (category) => data.find((a) => a.category === category)
  );

  return (
    <>
      <Header />
      {isLoggedIn ? (
        <>
          {" "}
          <div className="container mx-auto flex flex-wrap justify-center gap-4 mt-10">
            <button
              onClick={() => dispatch(filterProducts(data))}
              className="p-1 px-2 border border-slate-800 hover:bg-slate-800 hover:text-white"
            >
              All
            </button>
            {uniqueCategories.map((product, index) => (
              <button
                onClick={() => {
                  const filteredCategory = data.filter(
                    (a) => a.category === product.category
                  );

                  dispatch(filterProducts(filteredCategory));
                }}
                key={index}
                className="p-1 px-2 border border-slate-800 hover:bg-slate-800 hover:text-white"
              >
                {product.category}
              </button>
            ))}
          </div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-10 ">
            {filteredProducts.length > 0
              ? filteredProducts.map((item) => {
                  return (
                    <div
                      className="border border-black p-2 flex flex-col items-center"
                      key={item.id}
                    >
                      <img src={item.image} alt={item.image} />
                      <h1 className="font-semibold text-xl">{item.name}</h1>
                      <p>Category: ({item.category})</p>
                      <p className="text-red-500">{item.price} $</p>
                      <div className="flex items-center justify-center mt-2 flex-wrap gap-3">
                        <Link href={`/products/${item.id}`}>
                          <a className="p-2 bg-gray-200 border border-black hover:bg-gray-300">
                            Product Detail
                          </a>
                        </Link>

                        <span onClick={() => dispatch(addToCart(item))}>
                          <AddToCartBtn />
                        </span>
                      </div>
                    </div>
                  );
                })
              : data.map((item) => {
                  return (
                    <div
                      className="border border-black p-2 flex flex-col items-center"
                      key={item.id}
                    >
                      <img src={item.image} alt={item.image} />
                      <h1 className="font-semibold text-xl">{item.name}</h1>
                      <p>Category: ({item.category})</p>
                      <p className="text-red-500">{item.price} $</p>
                      <div className="flex items-center justify-center mt-2 flex-wrap gap-3">
                        <Link href={`/products/${item.id}`}>
                          <a className="p-2 bg-gray-200 border border-black hover:bg-gray-300">
                            Product Detail
                          </a>
                        </Link>

                        <span onClick={() => dispatch(addToCart(item))}>
                          <AddToCartBtn />
                        </span>
                      </div>
                    </div>
                  );
                })}
          </div>{" "}
        </>
      ) : (
        <h1 className="text-center text-3xl mt-5 text-red-500">
          Please login to view products
        </h1>
      )}
    </>
  );
};

Products.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  const fetchProducts = () => {
    return async (dispatch) => {
      return axios.get(GET_PRODUCTS).then((res) => {
        dispatch({
          type: FETCH_PRODUCTS,
          payload: res.data,
        });
      });
    };
  };

  await store.dispatch(fetchProducts());
});

export default Products;
