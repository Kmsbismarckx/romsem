import React, { useContext } from 'react';
import './menu.css';
import { Link } from 'react-router-dom';
import appContext from '../../context';

function Menu() {
  const { publicUrl } = useContext(appContext);
  return (
    <div className="menu">
      <Link className="menu__item" to="/">
        <img className="menu__item-img" src={`${publicUrl}/media/menu/menu.svg`} alt="" />
        <p className="menu__item-description">Меню</p>
      </Link>
      <Link className="menu__item" to="/cart">
        <img className="menu__item-img" src={`${publicUrl}/media/menu/basket.svg`} alt="" />
        <p className="menu__item-description">Корзина</p>
      </Link>
      <Link className="menu__item" to="/reviews">
        <img className="menu__item-img" src={`${publicUrl}/media/menu/reviews.svg`} alt="Отзывы" />
        <p className="menu__item-description">Отзывы</p>
      </Link>
    </div>
  );
}

export default Menu;
