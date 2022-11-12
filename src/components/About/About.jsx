import React from 'react';
import './about.css';
import AboutContacts from './aboutContacts/aboutContacts';

function About() {
  return (
    <div className="about">
      <div className="about___info">
        <h2 className="about___info_name">Заказать суши в Бишкеке</h2>
        <p className="about___info__description">
          Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с доставкой на дом,
          приготовленные по классическим и адаптированным к европейской аудитории рецептам, а также
          собственным наработкам наших поваров. Мы ценим время наших клиентов, поэтому вы можете
          заказать суши в Харькове с доставкой на дом или в офис.
        </p>
        <div className="about___info_button">Подробнее</div>
      </div>
      <AboutContacts />
    </div>
  );
}

export default About;
