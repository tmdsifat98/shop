import { useEffect, useState } from "react";
import "./App.css";
import Products from "./Components/Products";
import Navbar from "./Components/Navbar";
import CartItem from "./Components/CartItem";
import Category from "./Components/Category";
import ThemeSwitcher from "./Components/ThemeSwitcher";

const App = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [catBtn, setCatBtn] = useState("");
  const [carts, setCarts] = useState([]);
  const handleCart = (product) => {
    setCarts([...carts, product]);
  };
  const [categories, setCategories] = useState([]);
  // category data fetch
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((categories) => setCategories(categories));
  }, []);
  // product data fetch
  const [allProducts, setAllProducts] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((products) => {
        setData(products);
        setAllProducts(products);
      });
  }, []);
  const handleCategory = (categoryName) => {
    setCatBtn(categoryName);
    const filtered = allProducts.filter(
      (filteredCategory) => filteredCategory.category === categoryName
    );
    setData(filtered);
  };
  const priceUpdate = (price) => {
    setTotalPrice(price + totalPrice);
  };
  return (
    <>
      <div className="w-11/12 mx-auto">
        <Navbar carts={carts}></Navbar>
        <Category
          catBtn={catBtn}
          handleCategory={handleCategory}
          categories={categories}
        ></Category>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          <div className="md:col-span-2 lg:col-span-3">
            {" "}
            <Products
              handleCart={handleCart}
              priceUpdate={priceUpdate}
              data={data}
            ></Products>
          </div>
          <div>
            <h1 className=" mt-16 text-center mb-8 font-bold text-4xl">
              Cart Items
            </h1>
            {carts.length != 0
              ? carts.map((cart) => <CartItem cart={cart}></CartItem>)
              : <h1 className="text-center text-3xl font-bold text-red-600 border-2 border-gray-400 ml-12 p-6 my-10">No Item added</h1>}
            <div className="text-end font-semibold text-2xl">
              Total Price: ${totalPrice}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
