import React from 'react';
import './mainFooter.css';
import Input from '../UI/Input/Input';
import AboutContacts from '../About/aboutContacts/aboutContacts';
import ContactsInfo from '../About/contactsInfo/ContactsInfo';

function MainFooter() {
  // const [phoneValue, setPhoneValue] = useState('');

  return (
    <div className="main__footer">
      <div className="main__footer-item">
        <p className="main__footer-link">О компании</p>
        <p className="main__footer-link">Доставка и оплата</p>
        <p className="main__footer-link">Лента материалов</p>
        <p className="main__footer-link">Политика возврата</p>
      </div>
      <div className="main__footer-item">
        <p className="main__footer-name">Введите номер</p>
        <Input
          className="main__footer-input"
          // value={phoneValue}
          type="tel"
          pattern="\+7[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="+7996-___-____"
          // onChange={(e) => setPhoneValue(e.target.value.replace('/([0-9]{3})/'))}
        />
        <AboutContacts />
      </div>
      <ContactsInfo className="main__footer-item" />
    </div>
  );
}

export default MainFooter;
