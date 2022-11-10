import React from 'react';
import '../style/Cart.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/cartItem/CartItem';
import Button from '../components/UI/Button/Button';
import { selectCartItemIds, selectTotalPrice } from '../store/reducers/cartSlice';
import EmptyCart from '../components/emptyCart/EmptyCart';
import TotalList from '../components/totalList/TotalList';
import Menu from '../components/menu/Menu';

function Cart() {
  const cartIds = useSelector(selectCartItemIds);
  const totalPrice = useSelector(selectTotalPrice);

  if (cartIds.length === 0) {
    return <EmptyCart />;
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
        <TotalList ids={cartIds} totalPrice={totalPrice} />
      </div>
      <Link to="/order">
        <Button className="cart_">Оформить заказ</Button>
      </Link>
      <Menu />
    </div>
  );
}

export default Cart;