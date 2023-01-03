import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import QueryModal from '../queryModal/QueryModal';
import HeaderPhone from './headerPhone/HeaderPhone';
import HeaderSchedule from './headerSchedule/HeaderSchedule';
import appContext from '../../context';
import Select from '../UI/Select/Select';

function Header() {
  const { modal, setModal, setCartModal, filter, setFilter, isLaptop, isDesktop, publicUrl } =
    useContext(appContext);

  const [selectOptions] = useState([
    { value: 'spb', name: 'Санкт-Петербург' },
    { value: 'nino', name: 'Нижний Новгород' },
    { value: 'msc', name: 'Москва' },
    { value: 'tashkent', name: 'Ташкент' },
  ]);
  const location = useLocation();

  if (isLaptop) {
    return (
      <div className="header">
        <div className="header__info">
          <HeaderPhone />
          <HeaderSchedule />
        </div>
        <div className="header__main">
          <div className="header__location">
            <Select className="header" options={selectOptions} />
          </div>

          <div className="header__links">
            <Link className="header__link" to="/reviews">
              <p
                className={`header__link-description ${
                  location.pathname === '/reviews' ? 'header__link-description_active' : ''
                }`}
              >
                Отзывы
              </p>
            </Link>
            <Link className="header__link" to="/order">
              <p
                className={`header__link-description ${
                  location.pathname === '/order' ? 'header__link-description_active' : ''
                }`}
              >
                Доставка и оплата
              </p>
            </Link>
          </div>
          <div className="header__buttons">
            <img
              className="header__query"
              src={`${publicUrl}/media/header/query.svg`}
              alt="Поиск"
              onClick={() => setModal(true)}
            />
            {!isDesktop && (
              <img
                className="header__cart"
                src={`${publicUrl}/media/cart/cart.svg`}
                alt="Корзина"
                onClick={() => setCartModal(true)}
              />
            )}
          </div>
          <QueryModal />
        </div>
      </div>
    );
  }

  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <img src={`${process.env.PUBLIC_URL}/media/header/header_logo.png`} alt="Romsem" />
      </Link>
      <HeaderPhone />
      <HeaderSchedule />
      <div className="header__buttons">
        <img
          className="header__query"
          src={`${process.env.PUBLIC_URL}/media/header/query.svg`}
          alt="query"
          onClick={() => setModal(true)}
        />
      </div>
      <QueryModal visible={modal} setVisible={setModal} filter={filter} setFilter={setFilter} />
    </div>
  );
}

export default Header;
