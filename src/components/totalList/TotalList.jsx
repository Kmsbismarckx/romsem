import React from 'react';
import plural from 'plural-ru';
import './totalList.css';

function TotalList({ ids, totalPrice }) {
  return (
    <div className="total__list">
      <div className="total__list__item">
        <div className="total__list__item__name">
          {plural(ids.length, '%d товар', '%d товара', '%d товаров')}
        </div>
        <div className="total__list__item__name">Скидка</div>
        <div className="total__list__item__name">Доставка</div>
      </div>
      <div className="total__list__item">
        <div className="total__list__item__value">{totalPrice} COM</div>
        <div className="total__list__item__value">0 COM</div>
        <div className="total__list__item__value">Бесплатно</div>
      </div>
    </div>
  );
}

export default TotalList;
