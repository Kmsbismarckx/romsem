import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import QueryModal from '../queryModal/QueryModal';
import HeaderPhone from './headerPhone/HeaderPhone';
import HeaderSchedule from './headerSchedule/HeaderSchedule';
import appContext from '../../context';

function Header() {
  const { modal, setModal, filter, setFilter, isDesktop } = useContext(appContext);

  if (isDesktop) {
    return (
      <div className="header">
        <div className="header__info">
          <HeaderPhone />
          <HeaderSchedule />
        </div>
        <div className="header__main">
          <div className="header__location">
            <p className="header__location-name">Город:</p>
            <select className="header__location-choose">
              <option value="Bishkek">Бишкек</option>
              <option value="Moscow">Москва</option>
              <option value="Saint-Petersburg">Санкт-Петербург</option>
              <option value="Nizhny-Novgorod">Нижний Новгород</option>
            </select>
          </div>

          <div className="header__links">
            <Link className="header__link" to="/reviews">
              <p className="header__link-description">Отзывы</p>
            </Link>
            <Link className="header__link" to="/order">
              <p className="header__link-description">Доставка и оплата</p>
            </Link>
          </div>
          <div className="header__query">
            123
            <img
              className="header__query-img"
              src="media/header/query.svg"
              alt="query"
              onClick={() => setModal(true)}
            />
          </div>
          <QueryModal visible={modal} setVisible={setModal} filter={filter} setFilter={setFilter} />
        </div>
      </div>
    );
  }

  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <img src="media/header/header_logo.svg" alt="Romsem" />
      </Link>
      <HeaderPhone />
      <HeaderSchedule />
      <div className="header__query">
        <img
          className="header__query-img"
          src="media/header/query.svg"
          alt="query"
          onClick={() => setModal(true)}
        />
      </div>
      <QueryModal visible={modal} setVisible={setModal} filter={filter} setFilter={setFilter} />
    </div>
  );
}

export default Header;
