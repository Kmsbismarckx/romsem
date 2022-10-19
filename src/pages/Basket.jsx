import React, { useState } from 'react';
import plural from 'plural-ru';
import '../style/Basket.css';
import { useSelector } from 'react-redux';
import BasketItem from '../components/basketItem/BasketItem';
import Button from '../components/UI/Button/Button';

function Basket() {
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('basket')) || {});
  const goods = useSelector((state) => state.goodsReducer.goods);
  const basketList = [];
  let totalSum = 0;

  Object.keys(basket).forEach((item) => {
    totalSum += goods[item].price * basket[item].value;
    basketList.push(goods[item]);
  });

  if (basketList.length === 0) {
    return (
      <div className="basket">
        <h1>Ваша корзина пуста.</h1>
        <p>Добавьте же скорее чего нибудь!</p>
      </div>
    );
  }
  return (
    <div className="basket">
      <h2 className="basket__name">Корзина</h2>
      <div className="basket__list">
        {basketList.map((basketItem) => (
          <BasketItem
            key={basketItem.id}
            id={basketItem.id}
            basket={basket}
            setBasket={setBasket}
          />
        ))}
      </div>
      <div className="basket__total">
        <h2 className="basket__total_name">Итого</h2>
        <div className="basket__total_list">
          <div className="basket__total_list__item">
            <div className="basket__total_list__item_name">
              {plural(basketList.length, '%d товар', '%d товара', '%d товаров')}
            </div>
            <div className="basket__total_list__item_name">Скидка</div>
            <div className="basket__total_list__item_name">Доставка</div>
          </div>
          <div className="basket__total_list__item">
            <div className="basket__total_list__item_value">{totalSum} COM</div>
            <div className="basket__total_list__item_value">0 COM</div>
            <div className="basket__total_list__item_value">Бесплатно</div>
          </div>
        </div>
      </div>
      <Button className="basket_">Оформить заказ</Button>
    </div>
  );
}

export default Basket;
