import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import urlContext from '../../context';
import './header.css';
import QueryModal from '../queryModal/QueryModal';

function Header() {
  const { modal, setModal, filter, setFilter } = useContext(urlContext);

  return (
    <div className="header">
      <Link to="/" className="header__item header__item_logo">
        <img src="/media/header/header_logo.svg" alt="Romsem" />
      </Link>
      <div className="header__item header__item_phone">
        <p className="header__item_phone_name">Наш телефон</p>
        <p className="header__item_phone_number">+996 705 188 955</p>
        <p className="header__item_phone_number">+996 555 188 955</p>
      </div>
      <div className="header__item header__item_schedule">
        <img className="header__item_schedule_img" src="/media/header/clock.svg" alt="clock" />
        <div className="header__item_schedule_info">
          работаем
          <br />c 10:00 до 00:00
        </div>
      </div>
      <div className="header__item header__item_query">
        <img
          className="header__item_query_img"
          src="/media/header/query.svg"
          alt="query"
          onClick={() => setModal(true)}
        />
      </div>
      <QueryModal visible={modal} setVisible={setModal} filter={filter} setFilter={setFilter} />
    </div>
  );
}

export default Header;
