import React, { useContext } from 'react';
import appContext from '../../../context';

function HeaderSchedule() {
  const { isLaptop, publicUrl } = useContext(appContext);

  return (
    <div className="header__schedule">
      <img
        className="header__schedule-img"
        src={`${publicUrl}/media/header/clock.svg`}
        alt="clock"
      />
      <div className="header__schedule-info">
        работаем
        {!isLaptop && <br />}c 10:00 до 00:00
      </div>
    </div>
  );
}

export default HeaderSchedule;
