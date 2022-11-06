import React, { useState } from 'react';
import './cartItem.css';
import { useSelector } from 'react-redux';
import { selectGoodById } from '../../store/reducers/goodsSlice';

function CartItem({ id }) {
  const cartItem = useSelector((state) => selectGoodById(state, id));
  return (
    <div className="cart__item">
      <img
        className="cart__item_img"
        src={`/media/goods/${cartItem.name}.png`}
        alt={cartItem.name}
      />
      <div className="cart__item_content">
        <p className="cart__item_content_name">{cartItem.russianName}</p>
        <div className="cart__item_content_description">
          <div className="cart__item_content_description_item">
            <div className="cart__item_content_description_item_decrement" onClick={() => {}}>
              <img src="/media/cart/cart_decrement.svg" alt="" />
            </div>
            <div className="cart__item_content_description_item_quantity">XXX</div>
            <div className="cart__item_content_description_item_increment" onClick={() => {}} />
          </div>
          <p className="cart__item_content_description_item cart__item_content_description_item_price">
            XXX СОМ
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
