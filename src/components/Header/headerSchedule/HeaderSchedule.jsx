import React, { useContext } from 'react';
import appContext from '../../../context';

function HeaderSchedule() {
  const { isDesktop } = useContext(appContext);

  return (
    <div className="header__schedule">
      <img className="header__schedule-img" src="/media/header/clock.svg" alt="clock" />
      <div className="header__schedule-info">
        работаем
        {!isDesktop && <br />}c 10:00 до 00:00
      </div>
    </div>
  );
}

export default HeaderSchedule;
