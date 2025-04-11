import React from 'react';

const CartItem = ({cart}) => {
    

    return (
        <div>
            <div>
                <p>{cart.name}</p>
            </div>
            <div></div>
        </div>
    );
};

export default CartItem;