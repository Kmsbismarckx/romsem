import React from 'react';

function SmallProduct({ children, name, price, imgURL, className }) {
  return (
    <div className={`${className} small-product`}>
      <img
        className={`${className}-img small-product__img`}
        src="https://via.placeholder.com/200"
        alt={name}
      />
      <p className={`${className}-name small-product__name`}>{name}</p>
      <div className={`${className}-footer small-product__footer`}>
        <p className={`${className}-price small-product__price`}>{price} СОМ</p>
        {children}
      </div>
    </div>
  );
}

export default SmallProduct;
