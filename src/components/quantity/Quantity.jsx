import React from 'react';
import Decrement from '../UI/Decrement/Decrement';
import Increment from '../UI/Increment/Increment';

function Quantity({ decreaseQuantityHandler, increaseQuantityHandler, quantity }) {
  return (
    <div className="cart__item_content_description_item">
      <Decrement onClick={decreaseQuantityHandler || null} />
      <div className="cart__item_content_description_item_quantity">{quantity || 0}</div>
      <Increment onClick={increaseQuantityHandler || null} />
    </div>
  );
}

export default Quantity;
