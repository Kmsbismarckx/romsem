import React, { useContext } from 'react';
import './aboutContacts.css';
import appContext from '../../../context';
import ContactsInfo from '../contactsInfo/ContactsInfo';

function AboutContacts() {
  const { isTablet, isLaptop, publicUrl } = useContext(appContext);
  return (
    <div className="about__contacts">
      <p className="contacts__name">
        Выберите удобный <br /> мессенджер для общения
      </p>
      <div className="contacts__imgs">
        <img
          className="contacts__img"
          src={`${publicUrl}/media/about/whatsapp.svg`}
          alt="Whatsapp"
        />
        <img
          className="contacts__img"
          src={`${publicUrl}/media/about/telegram.svg`}
          alt="Telegram"
        />
        <img
          className="contacts__img"
          src={`${publicUrl}/media/about/instagram.svg`}
          alt="Instagram"
        />
      </div>
      {!isTablet && !isLaptop && <ContactsInfo />}
    </div>
  );
}

export default AboutContacts;
