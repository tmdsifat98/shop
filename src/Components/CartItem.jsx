import React from "react";

const CartItem = ({ cart }) => {
  return (
    <div>
      <div className="border-2 ml-12 flex justify-between items-center mb-2 border-gray-500 p-1">
        <div className="flex items-center gap-3 ">
          <img
            className="h-14 w-14 object-cover"
            src={cart.image}
            alt={cart.name}
          />
          <p>{cart.name}</p>
        </div>
        <div>Price: ${cart.price}</div>
      </div>
    </div>
  );
};

export default CartItem;
