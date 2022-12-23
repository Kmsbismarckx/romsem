import React, { useContext } from 'react';
import './smallProduct.css';
import appContext from '../../context';

function SmallProduct({ children, name, price, className, imgUrl }) {
  const { publicUrl } = useContext(appContext);
  return (
    <div className={`${className} small-product`}>
      <img
        className="small-product__img"
        src={imgUrl ? `${publicUrl}/${imgUrl}` : 'https://via.placeholder.com/200'}
        alt={name}
      />
      <p className="small-product__name">{name}</p>
      <div className="small-product__footer">
        <p className="small-product__price">{price} СОМ</p>
        {children}
      </div>
    </div>
  );
}

export default SmallProduct;
