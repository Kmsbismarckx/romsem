import React from 'react';

function SmallProduct({ children, name, price, imgURL, className }) {
  return (
    <div className={`${className} small__product`}>
      <img className={`${className}__img small__product__img`} src={imgURL} alt={name} />
      <p className={`${className}__name small__product__name`}>{name}</p>
      <div className={`${className}__footer small__product__footer`}>
        <p className={`${className}__price small__product__price`}>{price} СОМ</p>
        {children}
      </div>
    </div>
  );
}

export default SmallProduct;
