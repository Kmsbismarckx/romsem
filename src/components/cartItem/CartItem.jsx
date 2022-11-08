import React, { useEffect } from 'react';
import './cartItem.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectGoodById } from '../../store/reducers/goodsSlice';
import {
  decreaseQuantity,
  increaseQuantity,
  selectCartItemQuantity,
} from '../../store/reducers/cartSlice';
import Decrement from '../UI/Decrement/Decrement';
import Increment from '../UI/Increment/Increment';

function CartItem({ id }) {
  const dispatch = useDispatch();

  const cartItem = useSelector((state) => selectGoodById(state, id));
  const quantity = useSelector((state) => selectCartItemQuantity(state, id));

  const goodPrice = cartItem.price;
  const itemTotalPrice = goodPrice * quantity;

  const decreaseQuantityHandler = () => dispatch(decreaseQuantity({ id, goodPrice }));
  const increaseQuantityHandler = () => dispatch(increaseQuantity({ id, goodPrice }));

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
            <Decrement onClick={decreaseQuantityHandler} />
            <div className="cart__item_content_description_item_quantity">{quantity}</div>
            <Increment onClick={increaseQuantityHandler} />
          </div>
          <p className="cart__item_content_description_item cart__item_content_description_item_price">
            {itemTotalPrice} СОМ
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
