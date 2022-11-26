import React from 'react';
import plural from 'plural-ru';
import './totalList.css';

function TotalList({ ids, totalPrice }) {
  return (
    <div className="total__list">
      <div className="total__list-item">
        <div className="total__list-name">
          {plural(ids.length, '%d товар', '%d товара', '%d товаров')}
        </div>
        <div className="total__list-name">Скидка</div>
        <div className="total__list-name">Доставка</div>
      </div>
      <div className="total__list-item">
        <div className="total__list-value">{totalPrice} COM</div>
        <div className="total__list-value">0 COM</div>
        <div className="total__list-value">Бесплатно</div>
      </div>
    </div>
  );
}

export default TotalList;
