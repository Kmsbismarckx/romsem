import React from 'react';
import './smallProduct.css';

function SmallProduct({ children, name, price, className }) {
  return (
    <div className={`${className} small-product`}>
      <img className="small-product__img" src="https://via.placeholder.com/200" alt={name} />
      <p className="small-product__name">{name}</p>
      <div className="small-product__footer">
        <p className="small-product__price">{price} СОМ</p>
        {children}
      </div>
    </div>
  );
}

export default SmallProduct;
