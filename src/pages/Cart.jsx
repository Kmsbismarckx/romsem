import React, { useContext } from 'react';
import '../style/Cart.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCartItemIds, selectTotalPrice } from '../store/reducers/cartSlice';
import appContext from '../context';
import CartItem from '../components/cartItem/CartItem';
import Button from '../components/UI/Button/Button';
import EmptyCart from '../components/emptyCart/EmptyCart';
import TotalList from '../components/totalList/TotalList';
import Menu from '../components/menu/Menu';

function Cart() {
  const cartIds = useSelector(selectCartItemIds);
  const totalPrice = useSelector((state) => selectTotalPrice(state));
  const { isLaptop } = useContext(appContext);

  if (cartIds.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="cart" onClick={(event) => event.stopPropagation()}>
      <h2 className="cart__name">Корзина</h2>
      <div className="cart__list">
        {cartIds.map((id) => (
          <CartItem key={id} id={id} />
        ))}
      </div>
      {!isLaptop && (
        <div className="cart__total">
          <h2 className="cart__total-name">Итого</h2>
          <TotalList ids={cartIds} totalPrice={totalPrice} />
        </div>
      )}

      {isLaptop ? (
        <div className="total-pc">
          <p className="total-pc__price">{totalPrice} COM</p>
          <Link to="/order">
            <Button className="cart_">Оформить заказ</Button>
          </Link>
        </div>
      ) : (
        <Link className="cart__link" to="/order">
          <Button className="cart_">Оформить заказ</Button>
        </Link>
      )}

      {!isLaptop && <Menu />}
    </div>
  );
}

export default Cart;
