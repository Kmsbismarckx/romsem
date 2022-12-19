import React, { useContext, useState } from 'react';
import './about.css';
import AboutContacts from './aboutContacts/aboutContacts';
import appContext from '../../context';

function About() {
  const { isLaptop } = useContext(appContext);
  const [isOpened, setIsOpened] = useState(false);
  const aboutButtonHandler = () => {
    setIsOpened(!isOpened);
  };

  if (isLaptop) {
    return (
      <div className="about">
        <div className={`about__info ${isOpened ? 'about__info_opened' : ''}`}>
          <h2 className="about__info__name">Заказать суши в Бишкеке</h2>
          <p className="about__info__description">
            Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с доставкой на дом,
            приготовленные по классическим и адаптированным к европейской аудитории рецептам, а
            также собственным наработкам наших поваров. Мы ценим время наших клиентов, поэтому вы
            можете заказать суши в Харькове с доставкой на дом или в офис.
          </p>
          <p className="about__info__description"> В нашем меню более 20 видов суши:</p>
          <ul className="about__info__description about__info__description__list">
            <li>Классические с сырым лососем, тунцом, окунем.</li>
            <li>Экзотические с тигровой креветкой, морским гребешком.</li>
            <li>Пикантные с копченым лососем, угрем.</li>
          </ul>
          <p className="about__info__description">
            В меню также представлены гунканы: с начинкой из красной икры и тобико, а также феликсы,
            где японский майонез сочетается с рыбой, морепродуктами, угрем. Любители острых блюд
            могут купить суши с соусом спайси. Популярные начинки — копченая курица, снежный краб,
            креветки, гребешки, тунец, лосось и окунь.
          </p>
        </div>
        <div
          className={`about__info__button ${isOpened ? 'about__info__button_opened' : ''}`}
          onClick={aboutButtonHandler}
        >
          Подробнее
        </div>
      </div>
    );
  }

  return (
    <div className="about">
      <div className={`about__info ${isOpened ? 'about__info_opened' : ''}`}>
        <h2 className="about__info__name">Заказать суши в Бишкеке</h2>
        <p className="about__info__description">
          Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с доставкой на дом,
          приготовленные по классическим и адаптированным к европейской аудитории рецептам, а также
          собственным наработкам наших поваров. Мы ценим время наших клиентов, поэтому вы можете
          заказать суши в Харькове с доставкой на дом или в офис.
        </p>
        <p className="about__info__description">
          Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с доставкой на дом,
          приготовленные по классическим и адаптированным к европейской аудитории рецептам, а также
          собственным наработкам наших поваров. Мы ценим время наших клиентов, поэтому вы можете
          заказать суши в Харькове с доставкой на дом или в офис.
        </p>
        <p className="about__info__description">
          Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с доставкой на дом,
          приготовленные по классическим и адаптированным к европейской аудитории рецептам, а также
          собственным наработкам наших поваров. Мы ценим время наших клиентов, поэтому вы можете
          заказать суши в Харькове с доставкой на дом или в офис.
        </p>
        <p className="about__info__description">
          Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с доставкой на дом,
          приготовленные по классическим и адаптированным к европейской аудитории рецептам, а также
          собственным наработкам наших поваров. Мы ценим время наших клиентов, поэтому вы можете
          заказать суши в Харькове с доставкой на дом или в офис.
        </p>
      </div>
      <div
        className={`about__info__button ${isOpened ? 'about__info__button_opened' : ''}`}
        onClick={aboutButtonHandler}
      >
        Подробнее
      </div>
      <AboutContacts />
    </div>
  );
}

export default About;
