import React from "react";
import { IoIosStar } from "react-icons/io";

const Product = ({ product, handleCart,priceUpdate }) => {
  return (
    <div>
      <div className="card bg-base-100  h-[440px] shadow-sm">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 object-cover rounded-t-xl"
        />
        <div className="card-body">
          <div>
            <h1 className="text-lg font-semibold text-blue-700">
              Price: ${product.price}
            </h1>
          </div>
          <h2 className="card-title">{product.name}</h2>
          <p className="clamp-line">{product.description}</p>
          <p className="text-xl font-semibold flex items-center gap-2 ">
            Rating: <IoIosStar className="text-yellow-600" size={19} />{" "}
            {product.rating}
          </p>
          <div className="card-actions justify-between">
            <button
              onClick={() =>{ handleCart(product); priceUpdate(product.price)}}
              className="btn btn-outline btn-secondary"
            >
              Add to cart
            </button>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
