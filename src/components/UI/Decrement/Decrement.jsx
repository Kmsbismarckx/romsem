import React from 'react';
import './Decrement.css';

function Decrement({ onClick }) {
  return (
    <div className="decrement" onClick={onClick}>
      <img src="/media/cart/cart_decrement.svg" alt="Убрать" />
    </div>
  );
}

export default Decrement;
