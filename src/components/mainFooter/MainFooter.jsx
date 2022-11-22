import React, { useState } from 'react';
import Input from '../UI/Input/Input';
import AboutContacts from '../About/aboutContacts/aboutContacts';

function MainFooter() {
  // const [phoneValue, setPhoneValue] = useState('');

  return (
    <div className="main__footer">
      <div className="main__footer__item">
        <p className="main__footer__link">О компании</p>
        <p className="main__footer__link">Доставка и оплата</p>
        <p className="main__footer__link">Лента материалов</p>
        <p className="main__footer__link">Политика возврата</p>
      </div>
      <div className="main__footer__item">
        <p className="main__footer__item__name">Введите номер</p>
        <Input
          className="main__footer__item__phone__input"
          // value={phoneValue}
          type="tel"
          pattern="\+7[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="+7996-___-____"
          // onChange={(e) => setPhoneValue(e.target.value.replace('/([0-9]{3})/'))}
        />
        <AboutContacts />
      </div>
      <div className="main__footer__item">
        <p>
          Тел: <u>+996 705 188 955</u>
        </p>
        <p>
          Тел: <u>+996 555 188 955</u>
        </p>
        <p>Адрес:Бакаева 126</p>
      </div>
    </div>
  );
}

export default MainFooter;