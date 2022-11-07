import React from 'react';
import plural from 'plural-ru';
import '../style/Cart.css';
import { useSelector } from 'react-redux';
import CartItem from '../components/cartItem/CartItem';
import Button from '../components/UI/Button/Button';
import { selectCartItemIds, totalCartPrice } from '../store/reducers/cartSlice';

function Cart() {
  const cartIds = useSelector(selectCartItemIds);
  const totalPrice = useSelector(totalCartPrice);

  if (cartIds.length === 0) {
    return (
      <div className="cart">
        <h1>Ваша корзина пуста.</h1>
        <p>Добавьте же скорее чего нибудь!</p>
      </div>
    );
  }
  return (
    <div className="cart">
      <h2 className="cart__name">Корзина</h2>
      <div className="cart__list">
        {cartIds.map((id) => (
          <CartItem key={id} id={id} />
        ))}
      </div>
      <div className="cart__total">
        <h2 className="cart__total_name">Итого</h2>
        <div className="cart__total_list">
          <div className="cart__total_list__item">
            <div className="cart__total_list__item_name">
              {plural(cartIds.length, '%d товар', '%d товара', '%d товаров')}
            </div>
            <div className="cart__total_list__item_name">Скидка</div>
            <div className="cart__total_list__item_name">Доставка</div>
          </div>
          <div className="cart__total_list__item">
            <div className="cart__total_list__item_value">{totalPrice} COM</div>
            <div className="cart__total_list__item_value">0 COM</div>
            <div className="cart__total_list__item_value">Бесплатно</div>
          </div>
        </div>
      </div>
      <Button className="cart_">Оформить заказ</Button>
    </div>
  );
}

export default Cart;
