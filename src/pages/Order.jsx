import React from 'react';
import '../style/Order.css';
import { useSelector } from 'react-redux';
import Input from '../components/UI/Input/Input';
import Decrement from '../components/UI/Decrement/Decrement';
import Increment from '../components/UI/Increment/Increment';
import TotalList from '../components/totalList/TotalList';
import { selectCartItemIds } from '../store/reducers/cartSlice';
import Button from '../components/UI/Button/Button';

function Order() {
  const cartIds = useSelector(selectCartItemIds);
  return (
    <div className="order">
      <h2 className="form__title">Ваши данные</h2>
      <div className="form__user-data">
        <Input className="form__user_last-name" palceholder="Фамилия" />
        <Input className="form__user_first-name" palceholder="Имя" />
      </div>
      <div className="form__type-of-shipping">
        <div className="form__courier">Курьером</div>
        <div className="form__self-pickup">Самовывоз</div>
      </div>
      <div className="form__address-info">
        <Input className="form__address_street" />
        <Input className="form__address_house" />
        <div className="form__address_house_item">
          <Input className="form__address_house_flat" placeholder="Квартира" />
          <Input className="form__address_house_entrance" placeholder="Подъезд" />
        </div>
        <div className="form__address_house_item">
          <Input className="form__address_house_floor" placeholder="Этаж" />
          <Input className="form__address_house_code" placeholder="Код" />
        </div>
      </div>
      <div className="form__type-of-payment">
        <div className="form__courier">
          <img src="" alt="Наличными" />
          <p>Наличными</p>
        </div>
        <div className="form__courier">
          <img src="" alt="Картой" />
          <p>Картой</p>
        </div>
      </div>
      <div className="form__change">
        <div className="form__change_checkbox-area">
          <input type="checkbox" id="change" />
          <label htmlFor="change">Подготовить сдачу с</label>
        </div>
        <Input className="form__change_input" placehplder="Сумма" />
      </div>
      <div className="form_email-comment">
        <Input className="form__email" />
        <Input className="form__comment" />
      </div>
      <div className="form__shipping-time">
        <div className="form__shipping-time-now">На сейчас</div>
        <div className="form__shipping-time-later">На время</div>
      </div>
      <div className="form__additives">
        <div className="form__additives_item">
          <p className="form__additives_name" />
          <Decrement />
          <p>0</p>
          <Increment />
        </div>
        <div className="form__additives_item">
          <p className="form__additives_name" />
          <Decrement />
          <p>0</p>
          <Increment />
        </div>
      </div>
      <Input className="form__promo-code" />
      <TotalList ids={cartIds} />
      <Button className="form_">Оформить заказ</Button>
    </div>
  );
}

export default Order;
