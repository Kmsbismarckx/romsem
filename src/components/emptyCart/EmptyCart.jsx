import React, { useState } from 'react';
import './emptyCart.css';
import { Link } from 'react-router-dom';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

function EmptyCart() {
  const [address, setAddress] = useState(false);
  const locationPinHandler = () => setAddress(true);

  return (
    <div className="cart-empty">
      <div className="cart-empty__item">
        <div className="cart-empty__annotation">
          <h1 className="cart-empty__annotation_name">Ваша корзина пуста.</h1>
          <p className="cart-empty__annotation_item">Добавьте же скорее чего нибудь!</p>
          <p className="cart-empty__annotation_item">Бесплатная доставка от 800 СОМ</p>
        </div>
        {address ? (
          <div className="cart-empty__check_shipping">
            <div className="cart-empty__check_shipping_item">
              <p className="cart-empty__check_shipping_name">Введите адрес и нажмите enter</p>
              <Input
                className="cart-empty__check_shipping_input"
                placeholder="ул. Максима Горького, дом 20"
              />
            </div>
            <div className="cart-empty__check_shipping_item">
              <img
                className="cart-empty__check_shipping_clock"
                src="/media/cart/cart-clock.svg"
                alt="Время доставки"
              />
              <div>
                <p>60 минут</p>
                <p>Мин. заказ - 200 сом</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="cart-empty__location">
            <div className="cart-empty__location_map">
              <img
                className="cart-empty__location_map_img"
                src="/media/cart/cart-empty_location.png"
                alt="Location"
              />
              <div className="cart-empty__location_map_pin" onClick={locationPinHandler} />
            </div>
            <div className="cart-empty__location_description">
              <h2 className="cart-empty__location_description_name">Укажите адрес</h2>
              <p className="cart-empty__location_description_item">И узнайте время доставки</p>
            </div>
          </div>
        )}
      </div>
      {address ? (
        <div>
          <div className="cart-empty__check_shipping_API">
            <img
              className="cart-empty__check_shipping_API_img"
              src="/media/cart/cart-empty_locationAPI.png"
              alt=""
            />
          </div>
          <Link to="/">
            <Button className="cart-empty_">Смотреть меню</Button>
          </Link>
        </div>
      ) : (
        <Button className="cart-empty_">Оформить заказ</Button>
      )}
    </div>
  );
}

export default EmptyCart;
