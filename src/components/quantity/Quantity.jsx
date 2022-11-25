import React from 'react';
import Decrement from '../UI/Decrement/Decrement';
import Increment from '../UI/Increment/Increment';
import './Quantity.css';

function Quantity({ decreaseQuantityHandler, increaseQuantityHandler, quantity }) {
  return (
    <div className="quantity__container">
      <Decrement onClick={decreaseQuantityHandler || null} />
      <div className="quantity">{quantity || 0}</div>
      <Increment onClick={increaseQuantityHandler || null} />
    </div>
  );
}

export default Quantity;
