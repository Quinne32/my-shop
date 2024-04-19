import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <section className="">
      <main className="flex justify-between">
        <div className="flex gap-5">
          <h1 className="p-3 mx-2 my-2 border-2 rounded-2xl bg-blue-300 hover:bg-gray-200">
            <Link to="#" as={Link}>
              My shop
            </Link>
          </h1>
          <h2 className="p-3 mx-2 my-2 border-2  rounded-2xl  bg-blue-300 hover:bg-gray-200">
            <Link to="/" as={Link}>
              Products
            </Link>
          </h2>
        </div>
        <div>
          <h3 className="p-3 mx-2 my-2 border-2 rounded-2xl  bg-blue-300 hover:bg-gray-200">
            <Link to="/cart" as={Link}>
              My Cart: {cartProducts.length}
            </Link>
          </h3>
        </div>
      </main>
    </section>
  );
};

export default NavBar;
