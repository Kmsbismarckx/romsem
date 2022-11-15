import React, { useContext, useState } from 'react';
import '../style/Order.css';
import { useSelector } from 'react-redux';
import Input from '../components/UI/Input/Input';
import TotalList from '../components/totalList/TotalList';
import { selectCartItemIds, selectTotalPrice } from '../store/reducers/cartSlice';
import Button from '../components/UI/Button/Button';
import AdditivesItem from '../components/Order/additivesItem/AdditivesItem';
import appContext from '../context';
import Cart from './Cart';
import Header from '../components/Header/Header';
import UserData from '../components/Order/userData/UserData';
import AddressInfo from '../components/Order/addressInfo/AddressInfo';
import Payment from '../components/Order/payment/Payment';

function Order() {
  const cartIds = useSelector(selectCartItemIds);
  const totalPrice = useSelector(selectTotalPrice);
  const { isDesktop } = useContext(appContext);

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

  const activeClassHandler = (type, value) => (type === value ? '_active' : '');

  const shippingTypeHandler = (newShippingType) => {
    setShippingType(newShippingType);
  };
  const paymentTypeHandler = (newPaymentType) => {
    setPaymentType(newPaymentType);
  };
  const shippingTimeHandler = (newShippingTime) => {
    setShippingTime(newShippingTime);
  };

  if (isDesktop) {
    return (
      <div className="order pc__container">
        <div className="pc__main">
          <Header />
          <h2 className="form__title">Ваши данные</h2>
          <div className="order__form__container">
            <div className="order__form__container__item">
              <UserData formData={formData} setFormData={setFormData} />
              <Payment
                formData={formData}
                setFormData={setFormData}
                activeClassHandler={activeClassHandler}
                paymentType={paymentType}
                paymentTypeHandler={paymentTypeHandler}
              />
            </div>
            <div className="order__form__container__item">
              <AddressInfo
                formData={formData}
                setFormData={setFormData}
                activeClassHandler={activeClassHandler}
                shippingTypeHandler={shippingTypeHandler}
                shippingType={shippingType}
              />
            </div>
            <div className="order__form" />
          </div>
        </div>

        <div className="cart__container">
          <Cart />
        </div>
      </div>
    );
  }

  return (
    <div className="order ">
      <h2 className="form__title">Ваши данные</h2>
      <div className="order__form">
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
        <div className="form_email-comment">
          <Input
            className="order__form__item order__form_border-radius order__form_width order__input form__email"
            placeholder="E-mail"
            type="e-mail"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            onChange={(e) =>
              setFormData({ ...formData, ...formData.unnecessaryFields, eMail: e.target.value })
            }
          />
          <Input
            className="order__form__item order__form_border-radius order__form_width order__input form__comment"
            placeholder="Комменатрий к заказу"
            pattern="^[А-Яа-яЁёA-Za-z\s]+$"
            onChange={(e) =>
              setFormData({ ...formData, ...formData.unnecessaryFields, comment: e.target.value })
            }
          />
        </div>
        <div className="form___shipping-time form__toggle order__form_border-radius order__form_width ">
          <div
            className={`order__form__item form__toggle__item form__toggle__item${activeClassHandler(
              shippingTime,
              'now'
            )} form__shipping-time-now`}
            onClick={() => shippingTimeHandler('now')}
          >
            На сейчас
          </div>
          <div
            className={`order__form__item form__toggle__item form__toggle__item${activeClassHandler(
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
        className="order__form__item order__input form__promo-code order__form_border-radius order__form_width"
        placeholder="Введите промокод"
        onChange={(e) =>
          setFormData({ ...formData, ...formData.unnecessaryFields, promoCode: e.target.value })
        }
      />
      <TotalList ids={cartIds} totalPrice={totalPrice} />
      <div className="order__total-price">
        <div className="order__total-price__item">Итого</div>
        <div className="order__total-price__item">{totalPrice} COM</div>
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
