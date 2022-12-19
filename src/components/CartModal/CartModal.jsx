import React, { useContext } from 'react';
import Cart from '../../pages/Cart';
import './CartModal.css';
import appContext from '../../context';

function CartModal() {
  const { cartModal, setCartModal } = useContext(appContext);
  const rootClasses = ['cart__modal'];

  if (cartModal) {
    rootClasses.push('cart__modal_active');
  }
  return (
    <div
      className={rootClasses.join(' ')}
      onClick={() => {
        setCartModal(false);
      }}
    >
      <Cart />
    </div>
  );
}

export default CartModal;
