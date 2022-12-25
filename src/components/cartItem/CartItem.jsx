import React, { useContext } from 'react';
import './cartItem.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectGoodById } from '../../store/reducers/goodsSlice';
import {
  decreaseQuantity,
  increaseQuantity,
  selectCartItemQuantity,
  selectCartItemTotalPrice,
  selectCartItemType,
} from '../../store/reducers/cartSlice';
import Quantity from '../quantity/Quantity';
import appContext from '../../context';
import { selectAdditionalById } from '../../store/reducers/additionalSlice';

function CartItem({ id }) {
  const dispatch = useDispatch();
  const { publicUrl } = useContext(appContext);
  const cartItemType = useSelector((state) => selectCartItemType(state, id));

  const cartItem =
    cartItemType === 'additional'
      ? useSelector((state) => selectAdditionalById(state, id))
      : useSelector((state) => selectGoodById(state, id));

  const quantity = useSelector((state) => selectCartItemQuantity(state, id));
  const cartItemTotalPrice = useSelector((state) => selectCartItemTotalPrice(state, id));
  const decreaseQuantityHandler = () => dispatch(decreaseQuantity({ id, cartItemTotalPrice }));
  const increaseQuantityHandler = () => dispatch(increaseQuantity({ id, cartItemTotalPrice }));

  return (
    <div className="cart__item">
      <img
        className="cart__item-img"
        src={`${publicUrl}/media/cart/${cartItem.name}.png`}
        alt={cartItem.name}
      />
      <div className="cart__item-content">
        <p className="cart__item-name">{cartItem.russianName}</p>

        <div className="cart__item-description">
          <Quantity
            decreaseQuantityHandler={decreaseQuantityHandler}
            increaseQuantityHandler={increaseQuantityHandler}
            quantity={quantity}
          />
          <p className="cart__item-price">{cartItemTotalPrice} СОМ</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
