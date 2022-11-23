import React from 'react';
import './contactsInfo.css';

function ContactsInfo({ className }) {
  return (
    <div className={`${className || ''} contacts__info`}>
      <p className="contacts__phone">
        Тел: <u>+996 705 188 955</u>{' '}
      </p>
      <p className="contacts__phone">
        Тел: <u>+996 555 188 955</u>{' '}
      </p>
      <p className="contacts__address">Адрес:Бакаева 126</p>
    </div>
  );
}

export default ContactsInfo;
