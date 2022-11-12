import React from 'react';
import './menu.css';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="menu">
      <Link className="menu__item" to="/">
        <img className="menu__item__img" src="/media/menu/menu.svg" alt="" />
        <p className="menu__item__description">Меню</p>
      </Link>
      <Link className="menu__item" to="/cart">
        <img className="menu__item__img" src="/media/menu/basket.svg" alt="" />
        <p className="menu__item__description">Корзина</p>
      </Link>
      <Link className="menu__item" to="/reviews">
        <img className="menu__item__img" src="/media/menu/reviews.svg" alt="Отзывы" />
        <p className="menu__item__description">Отзывы</p>
      </Link>
    </div>
  );
}

export default Menu;
