import React, { useContext } from 'react';
import appContext from '../../../context';

function HeaderSchedule() {
  const { isDesktop } = useContext(appContext);

  return (
    <div className="header__item header__item__schedule">
      <img className="header__item__schedule__img" src="/media/header/clock.svg" alt="clock" />
      <div className="header__item__schedule__info">
        работаем
        {!isDesktop && <br />}c 10:00 до 00:00
      </div>
    </div>
  );
}

export default HeaderSchedule;
