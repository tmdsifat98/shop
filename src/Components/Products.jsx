import React from "react";
import Product from "./Product";

const Products = ({ data,handleCart }) => {
  
  return (
    <div>
      <div>
        <h1>Category:</h1>
        <div className="grid grid-cols-4 gap-5">
          {data.map((product) => (
            <Product key={product.id} handleCart={handleCart} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
