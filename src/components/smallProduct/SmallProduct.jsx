import React from 'react';

function SmallProduct({ children, name, price, imgURL, className }) {
  return (
    <div className={`${className} small__product`}>
      <img className={`${className}_img small__product_img`} src={imgURL} alt={name} />
      <p className={`${className}_name small__product_name`}>{name}</p>
      <div className={`${className}_footer small__product_footer`}>
        <p className={`${className}_price small__product_price`}>{price} СОМ</p>
        {children}
      </div>
    </div>
  );
}

export default SmallProduct;
