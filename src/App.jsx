import { useEffect, useState } from "react";
import "./App.css";
import Products from "./Components/Products";
import Navbar from "./Components/Navbar";
import CartItem from "./Components/CartItem";

const App = () => {
  const [totalPrice, setTotalPrice]=useState(0)
  const [carts, setCarts] = useState([]);
  const handleCart = (product) => {
    setCarts([...carts, product]);
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div className="w-11/12 mx-auto">
        <Navbar carts={carts} ></Navbar>
        <Products handleCart={handleCart} data={data}></Products>
        <div>
          {carts.map((cart) => (
            
            
            <CartItem cart={cart}></CartItem>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
