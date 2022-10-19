import React from 'react';
import './about.css';

function About() {
  return (
    <div className="about">
      <div className="about__info">
        <h2 className="about__info_name">Заказать суши в Бишкеке</h2>
        <p className="about__info_description">
          Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с доставкой на дом,
          приготовленные по классическим и адаптированным к европейской аудитории рецептам, а также
          собственным наработкам наших поваров. Мы ценим время наших клиентов, поэтому вы можете
          заказать суши в Харькове с доставкой на дом или в офис.
        </p>
        <div className="about__info_button">Подробнее</div>
      </div>
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
    </div>
  );
}

export default About;
