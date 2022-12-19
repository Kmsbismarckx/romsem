import React, { useContext, useState } from 'react';
import '../style/Order.css';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/UI/Input/Input';
import TotalList from '../components/totalList/TotalList';
import { selectCartItemIds, selectTotalPrice } from '../store/reducers/cartSlice';
import Button from '../components/UI/Button/Button';
import AdditivesItem from '../components/Order/additivesItem/AdditivesItem';
import appContext from '../context';
import Cart from './Cart';
import UserData from '../components/Order/userData/UserData';
import AddressInfo from '../components/Order/addressInfo/AddressInfo';
import Payment from '../components/Order/payment/Payment';
import HeaderPhone from '../components/Header/headerPhone/HeaderPhone';
import HeaderSchedule from '../components/Header/headerSchedule/HeaderSchedule';

function Order() {
  const navigate = useNavigate();
  const cartIds = useSelector(selectCartItemIds);
  const totalPrice = useSelector(selectTotalPrice);
  const { isLaptop } = useContext(appContext);

  const [shippingType, setShippingType] = useState('courier');
  const [paymentType, setPaymentType] = useState('cash');
  const [shippingTime, setShippingTime] = useState('now');
  const [formData, setFormData] = useState({
    lastName: '',
    name: '',
    addressData: { street: '', flat: '', entrance: '', floor: '', code: '' },
    change: {
      isChange: false,
      changesSum: '',
    },
    unnecessaryFields: { eMail: '', comment: '', promoCode: '' },
  });
  const [makeOrderValidation, setMakeOrderValidation] = useState(false);

  const activeClassHandler = (type, value) => (type === value ? 'form__toggle-item_active' : '');

  const shippingTypeHandler = (newShippingType) => {
    setShippingType(newShippingType);
  };
  const paymentTypeHandler = (newPaymentType) => {
    setPaymentType(newPaymentType);
  };
  const shippingTimeHandler = (newShippingTime) => {
    setShippingTime(newShippingTime);
  };

  if (isLaptop) {
    return (
      <div className="order">
        <div className="order__main">
          <div className="order__header">
            <div className="order__header-button_back" onClick={() => navigate(-1)}>
              Продолжить выбор
            </div>
            <div className="order__header-content">
              <HeaderPhone />
              <HeaderSchedule />
            </div>
          </div>
          <div className="order__content">
            {' '}
            <h2 className="form__title">Ваши данные</h2>
            <div className="form">
              <div className="form__column">
                <UserData formData={formData} setFormData={setFormData} />
                <Payment
                  formData={formData}
                  setFormData={setFormData}
                  activeClassHandler={activeClassHandler}
                  paymentType={paymentType}
                  paymentTypeHandler={paymentTypeHandler}
                />
                <Input
                  className="form__item form__input form__comment"
                  placeholder="Комменатрий к заказу"
                  pattern="^[А-Яа-яЁёA-Za-z\s]+$"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      ...formData.unnecessaryFields,
                      comment: e.target.value,
                    })
                  }
                />
                <div className="form__additives-list">
                  <AdditivesItem />
                  <AdditivesItem />
                </div>
                <Input
                  className="form__item form__input form__promo-code"
                  placeholder="Введите промокод"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      ...formData.unnecessaryFields,
                      promoCode: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form__column">
                <AddressInfo
                  formData={formData}
                  setFormData={setFormData}
                  activeClassHandler={activeClassHandler}
                  shippingTypeHandler={shippingTypeHandler}
                  shippingType={shippingType}
                />
                <div className="form__shipping-time form__toggle">
                  <div
                    className={`form__item form__toggle-item ${activeClassHandler(
                      shippingTime,
                      'now'
                    )} form__shipping-time-now`}
                    onClick={() => shippingTimeHandler('now')}
                  >
                    На сейчас
                  </div>
                  <div
                    className={`form__item form__toggle-item ${activeClassHandler(
                      shippingTime,
                      'later'
                    )} form__shipping-time-later`}
                    onClick={() => shippingTimeHandler('later')}
                  >
                    На время
                  </div>
                </div>
                <Input
                  className="form__item form__input form__email"
                  placeholder="E-mail"
                  type="e-mail"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      ...formData.unnecessaryFields,
                      eMail: e.target.value,
                    })
                  }
                />
              </div>
            </div>{' '}
            <Button className="form_">Оформить заказ</Button>
            <p className="form__item form__offer">
              Нажимая на кнопку Оформить заказ, Вы подтверждаете свое согласие на обработку
              персональных данных в соответствии с{' '}
              <a className="form__offer-link" href="/">
                Публичной оффертой
              </a>
            </p>
          </div>
        </div>

        <Cart />
      </div>
    );
  }

  return (
    <div className="order">
      <h2 className="form__title">Ваши данные</h2>
      <div className="form">
        <UserData formData={formData} setFormData={setFormData} />
        <AddressInfo
          formData={formData}
          setFormData={setFormData}
          activeClassHandler={activeClassHandler}
          shippingTypeHandler={shippingTypeHandler}
          shippingType={shippingType}
        />
        <Payment
          formData={formData}
          setFormData={setFormData}
          activeClassHandler={activeClassHandler}
          paymentType={paymentType}
          paymentTypeHandler={paymentTypeHandler}
        />
        <div className="form__email-comment">
          <Input
            className="form__email form__item form__input "
            placeholder="E-mail"
            type="e-mail"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            onChange={(e) =>
              setFormData({ ...formData, ...formData.unnecessaryFields, eMail: e.target.value })
            }
          />
          <Input
            className="form__comment form__item form__input"
            placeholder="Комменатрий к заказу"
            pattern="^[А-Яа-яЁёA-Za-z\s]+$"
            onChange={(e) =>
              setFormData({ ...formData, ...formData.unnecessaryFields, comment: e.target.value })
            }
          />
        </div>
        <div className="form__shipping-time form__toggle">
          <div
            className={`form__item form__toggle-item ${activeClassHandler(
              shippingTime,
              'now'
            )} form__shipping-time-now`}
            onClick={() => shippingTimeHandler('now')}
          >
            На сейчас
          </div>
          <div
            className={`form__item form__toggle-item ${activeClassHandler(
              shippingTime,
              'later'
            )} form__shipping-time-later`}
            onClick={() => shippingTimeHandler('later')}
          >
            На время
          </div>
        </div>
      </div>

      <div className="form__additives-list">
        <AdditivesItem />
        <AdditivesItem />
      </div>
      <Input
        className="form__promo-code form__item form__input"
        placeholder="Введите промокод"
        onChange={(e) =>
          setFormData({ ...formData, ...formData.unnecessaryFields, promoCode: e.target.value })
        }
      />
      <TotalList ids={cartIds} totalPrice={totalPrice} />
      <div className="order__total-price">
        <div className="total-price__item">Итого</div>
        <div className="total-price__item">{totalPrice} COM</div>
      </div>
      <Button
        className="form_"
        onClick={(e) => {
          if (formData.name || formData.lastName) {
            console.log(1);
          } else {
            e.target.disabled = true;
          }
        }}
      >
        Оформить заказ
      </Button>
    </div>
  );
}

export default Order;
