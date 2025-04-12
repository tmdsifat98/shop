import React from "react";
import Product from "./Product";

const Products = ({ data, handleCart,priceUpdate }) => {
  return (
    <div>
      <div>
        <h1 className="text-center my-6 text-fuchsia-700 font-bold text-2xl lg:colspan-3">
          Total Item : {data.length}
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.length != 0 ? (
            data.map((product) => (
              <Product
                priceUpdate={priceUpdate}
                key={product.id}
                handleCart={handleCart}
                product={product}
              ></Product>
            ))
          ) : (
            <div className="col-span-3 flex mt-36 items-center justify-center">
              <h1 className="text-4xl text-red-600">
                No products available in this category
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
