import React, { useContext } from 'react';
import './Decrement.css';
import appContext from '../../../context';

function Decrement({ onClick }) {
  const { publicUrl } = useContext(appContext);
  return (
    <div className="decrement" onClick={onClick}>
      <img src={`${publicUrl}/media/cart/cart_decrement.svg`} alt="Убрать" />
    </div>
  );
}

export default Decrement;
