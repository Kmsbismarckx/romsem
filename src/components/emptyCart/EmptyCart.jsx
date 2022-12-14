import React, { useContext, useState } from 'react';
import './emptyCart.css';
import { Link } from 'react-router-dom';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import appContext from '../../context';

function EmptyCart() {
  const [address, setAddress] = useState(false);
  const locationPinHandler = () => setAddress(true);
  const { isLaptop, publicUrl } = useContext(appContext);

  return (
    <div className="empty-cart" onClick={(event) => event.stopPropagation()}>
      <div className="empty-cart__content">
        <div className="empty-cart__annotation">
          <h1 className="annotation__name">Ваша корзина пуста.</h1>
          <p className="annotation__item">Добавьте же скорее чего нибудь!</p>
          <p className="annotation__item">Бесплатная доставка от 800 СОМ</p>
        </div>
        {address ? (
          <div className="empty-cart__check-shipping">
            <div className="check-shipping__item">
              <p className="check-shipping__name">Введите адрес и нажмите enter</p>
              <Input className="check-shipping__input" placeholder="ул. Максима Горького, дом 20" />
            </div>
            <div className="check-shipping__item">
              <img
                className="check-shipping__clock"
                src={`${publicUrl}/media/cart/cart-clock.svg`}
                alt="Время доставки"
              />
              <div>
                <p>60 минут</p>
                <p>Мин. заказ - 200 сом</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="empty-cart__location">
            <div className="location__map">
              <img
                className="location__img"
                src={`${publicUrl}/media/cart/cart-empty_location.png`}
                alt="Location"
              />
              <div className="location__pin" onClick={locationPinHandler} />
            </div>
            <div className="location__description">
              <h2 className="location__name">Укажите адрес</h2>
              <p className="location__info">И узнайте время доставки</p>
            </div>
          </div>
        )}
      </div>
      {address ? (
        <div>
          <div className="empty-cart__shipping-API">
            <img
              className="shipping-API__img"
              src={`${publicUrl}/media/cart/cart-empty_locationAPI.png`}
              alt="Location"
            />
          </div>
          {!isLaptop && (
            <Link to="/">
              <Button className="empty-cart_">Смотреть меню</Button>
            </Link>
          )}
        </div>
      ) : (
        !isLaptop && <Button className="empty-cart_">Оформить заказ</Button>
      )}
    </div>
  );
}

export default EmptyCart;
