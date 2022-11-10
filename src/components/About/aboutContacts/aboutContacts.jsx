import React from 'react';

function AboutContacts() {
  return (
    <div className="about__contacts">
      <p className="about__contacts_name">
        Выберите удобный <br /> мессенджер для общения
      </p>
      <div className="about__contacts_imgs">
        <img className="about__contacts_img" src="/media/about/whatsapp.svg" alt="Whatsapp" />
        <img className="about__contacts_img" src="/media/about/telegram.svg" alt="Telegram" />
        <img className="about__contacts_img" src="/media/about/instagram.svg" alt="Instagram" />
      </div>
      <div className="about__contacts_phones">
        <p>
          Тел: <u>+996 705 188 955</u>{' '}
        </p>
        <p>
          Тел: <u>+996 555 188 955</u>{' '}
        </p>
        <p>Адрес:Бакаева 126</p>
      </div>
    </div>
  );
}

export default AboutContacts;