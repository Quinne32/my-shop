import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

const Product = () => {
  const dispatch = useDispatch();

  const { data: products } = useSelector((state) => state.products);
  console.log(products);
  // const [products, getProducts] = useState([]);

  useEffect(() => {
    dispatch(getProducts());
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => getProducts(result));
  }, []);

  const addToCart = (product) => {
    // Dipatch an add section
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <div
      key={product.id}
      className="px-6 py-3 w-80 h-auto mx-12 flex flex-col items-center gap-2 border border-grey-900 rounded-3xl shadow-lg hover:shadow-2xl"
    >
      <div className="w-[100px] h-auto">
        <img src={product.image} alt="product image" />
      </div>
      <div className="font-bold">
        <h1 className="">{product.title}</h1>
      </div>
      <div>
        <h2 className="">${product.price}</h2>
      </div>
      <div>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 rounded-full text-white p-2 hover:shadow-lg"
        >
          Add To Cart
        </button>
      </div>
    </div>
  ));

  return (
    <>
      <h1 className="p-4 m-4 text-center text-5xl font-bold text-sky-600/100">
        Product Dashboard
      </h1>
      <div className="grid grid-cols-4 gap-y-5 gap-x-0-">{cards}</div>
    </>
  );
};

export default Product;
