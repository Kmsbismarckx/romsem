import React from 'react';
import plural from 'plural-ru';
import './totalList.css';

function TotalList({ ids, totalPrice }) {
  return (
    <div className="total_list">
      <div className="total_list__item">
        <div className="total_list__item_name">
          {plural(ids.length, '%d товар', '%d товара', '%d товаров')}
        </div>
        <div className="total_list__item_name">Скидка</div>
        <div className="total_list__item_name">Доставка</div>
      </div>
      <div className="total_list__item">
        <div className="total_list__item_value">{totalPrice} COM</div>
        <div className="total_list__item_value">0 COM</div>
        <div className="total_list__item_value">Бесплатно</div>
      </div>
    </div>
  );
}

export default TotalList;
