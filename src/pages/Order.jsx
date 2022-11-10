import React, { useState } from 'react';
import '../style/Order.css';
import { useSelector } from 'react-redux';
import Input from '../components/UI/Input/Input';
import TotalList from '../components/totalList/TotalList';
import { selectCartItemIds, selectTotalPrice } from '../store/reducers/cartSlice';
import Button from '../components/UI/Button/Button';
import AdditivesItem from '../components/Order/additivesItem/AdditivesItem';

function Order() {
  const cartIds = useSelector(selectCartItemIds);
  const totalPrice = useSelector(selectTotalPrice);

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

  return (
    <div className="order ">
      <h2 className="form__title">Ваши данные</h2>
      <div className="order__form">
        <div className="form__user-data">
          <Input
            className="order__form__item order__form_border-radius order__form_width order__input form__user_last-name"
            placeholder="Фамилия"
            pattern="^[А-Яа-яЁёA-Za-z\s]+$"
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
          <Input
            className="order__form__item order__form_border-radius order__form_width order__input form__user_first-name"
            placeholder="Имя"
            pattern="^[А-Яа-яЁёA-Za-z\s]+$"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="form__type-of-shipping form__toggle order__form_border-radius order__form_width">
          <div
            className={`order__form__item form__courier form__toggle__item form__toggle__item${activeClassHandler(
              shippingType,
              'courier'
            )} `}
            onClick={() => shippingTypeHandler('courier')}
          >
            Курьером
          </div>
          <div
            className={`order__form__item form__toggle__item form__self-pickup form__toggle__item${activeClassHandler(
              shippingType,
              'selfPickup'
            )}  `}
            onClick={() => shippingTypeHandler('selfPickup')}
          >
            Самовывоз
          </div>
        </div>
        {shippingType === 'courier' && (
          <div className="form__address-info">
            <Input
              className="order__form__item order__form_border-radius order__form_width order__input form__address_street"
              placeholder="Улица"
              pattern="^[А-Яа-яЁёA-Za-z\s]+$"
              onChange={(e) =>
                setFormData({ ...formData, ...formData.addressData, street: e.target.value })
              }
            />
            <Input
              className="order__form__item order__form_border-radius order__form_width order__input form__address_house"
              placeholder="Дом"
              type="number"
              onChange={(e) =>
                setFormData({ ...formData, ...formData.addressData, house: e.target.value })
              }
            />
            <div className="form__address_house_item">
              <Input
                className="order__form__item order__form_border-radius order__form_width order__input form__address_house_flat"
                placeholder="Квартира"
                type="number"
                onChange={(e) =>
                  setFormData({ ...formData, ...formData.addressData, flat: e.target.value })
                }
              />
              <Input
                className="order__form__item order__form_border-radius order__form_width order__input form__address_house_entrance"
                placeholder="Подъезд"
                type="number"
                onChange={(e) =>
                  setFormData({ ...formData, ...formData.addressData, entrance: e.target.value })
                }
              />
            </div>
            <div className="form__address_house_item">
              <Input
                className="order__form__item order__form_border-radius order__form_width order__input form__address_house_floor"
                placeholder="Этаж"
                type="number"
                onChange={(e) =>
                  setFormData({ ...formData, ...formData.addressData, floor: e.target.value })
                }
              />
              <Input
                className="order__form__item order__form_border-radius order__form_width order__input form__address_house_code"
                placeholder="Код"
                type="number"
                pattern="[0-9]{6}"
                onChange={(e) =>
                  setFormData({ ...formData, ...formData.addressData, code: e.target.value })
                }
              />
            </div>
          </div>
        )}
        <div className="form__type-of-payment form__toggle order__form_border-radius order__form_width ">
          <div
            className={`order__form__item form__cash form__toggle__item form__toggle__item${activeClassHandler(
              paymentType,
              'cash'
            )} `}
            onClick={() => paymentTypeHandler('cash')}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={`order__svg${activeClassHandler(paymentType, 'cash')}`}
                d="M17.1816 9.07549V6.54563C17.1816 5.68778 16.5162 4.99012 15.6755 4.92247L13.326 0.818843C13.1083 0.439316 12.7568 0.168054 12.3361 0.0554156C11.9174 -0.0564561 11.4796 0.00229861 11.1048 0.220404L3.05087 4.90928H1.63635C0.733897 4.90928 0 5.64313 0 6.54563V16.3636C0 17.2661 0.733859 18 1.63635 18H15.5452C16.4477 18 17.1816 17.2661 17.1816 16.3636V13.8338C17.6567 13.6643 17.9997 13.2145 17.9997 12.6819V10.2274C17.9997 9.69476 17.6567 9.24493 17.1816 9.07549ZM14.7248 4.90928H11.1592L13.8334 3.35235L14.7248 4.90928ZM13.4269 2.64235L9.53311 4.90928H7.918L13.0231 1.93702L13.4269 2.64235ZM11.5167 0.927494C11.7017 0.819227 11.9178 0.790463 12.1243 0.845613C12.3333 0.901529 12.5075 1.03657 12.6157 1.22552L12.6166 1.22702L6.29201 4.90928H4.67698L11.5167 0.927494ZM16.3634 16.3636C16.3634 16.8147 15.9962 17.1818 15.5452 17.1818H1.63635C1.18533 17.1818 0.818194 16.8147 0.818194 16.3636V6.54563C0.818194 6.09461 1.18533 5.72747 1.63635 5.72747H15.5452C15.9962 5.72747 16.3634 6.09461 16.3634 6.54563V9.00013H13.9089C12.5554 9.00013 11.4544 10.1011 11.4544 11.4546C11.4544 12.8081 12.5554 13.9091 13.9089 13.9091H16.3634V16.3636ZM17.1816 12.6819C17.1816 12.9076 16.9982 13.091 16.7725 13.091H13.9089C13.0064 13.091 12.2725 12.3571 12.2725 11.4546C12.2725 10.5522 13.0064 9.81829 13.9089 9.81829H16.7725C16.9982 9.81829 17.1816 10.0016 17.1816 10.2274V12.6819Z"
                fill="black"
              />
            </svg>
            <p>Наличными</p>
          </div>
          <div
            className={`order__form__item form__card form__toggle__item form__toggle__item${activeClassHandler(
              paymentType,
              'card'
            )} `}
            onClick={() => paymentTypeHandler('card')}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_25_525)">
                <path
                  className={`order__svg${activeClassHandler(paymentType, 'card')}`}
                  d="M19.7083 3.66666H2.29165C1.0285 3.66666 0 4.69516 0 5.95835V16.0417C0 17.3049 1.0285 18.3334 2.29165 18.3334H19.7083C20.9715 18.3334 22 17.3049 22 16.0417V5.95835C22 4.69516 20.9715 3.66666 19.7083 3.66666ZM21.0833 16.0417C21.0833 16.7998 20.4664 17.4167 19.7083 17.4167H2.29165C1.53355 17.4167 0.916652 16.7998 0.916652 16.0417V5.95835C0.916652 5.20025 1.53355 4.58335 2.29165 4.58335H19.7083C20.4664 4.58335 21.0833 5.20025 21.0833 5.95835V16.0417H21.0833Z"
                  fill="#000"
                />
                <path
                  className={`order__svg${activeClassHandler(paymentType, 'card')}`}
                  d="M21.5417 6.41666H0.458348C0.205348 6.41666 0 6.622 0 6.875V9.625C0 9.878 0.205348 10.0834 0.458348 10.0834H21.5417C21.7947 10.0834 22 9.878 22 9.625V6.875C22 6.622 21.7947 6.41666 21.5417 6.41666ZM21.0833 9.16666H0.916652V7.33331H21.0833V9.16666H21.0833Z"
                  fill="#000"
                />
                <path
                  className={`order__svg${activeClassHandler(paymentType, 'card')}`}
                  d="M8.70835 12.8333H3.20835C2.95535 12.8333 2.75 13.0387 2.75 13.2917C2.75 13.5447 2.95535 13.75 3.20835 13.75H8.70835C8.96135 13.75 9.1667 13.5446 9.1667 13.2916C9.1667 13.0386 8.96135 12.8333 8.70835 12.8333Z"
                  fill="#000"
                />
                <path
                  className={`order__svg${activeClassHandler(paymentType, 'card')}`}
                  d="M8.70835 14.6667H3.20835C2.95535 14.6667 2.75 14.872 2.75 15.125C2.75 15.378 2.95535 15.5834 3.20835 15.5834H8.70835C8.96135 15.5834 9.1667 15.378 9.1667 15.125C9.16665 14.872 8.96135 14.6667 8.70835 14.6667Z"
                  fill="#000"
                />
                <path
                  className={`order__svg${activeClassHandler(paymentType, 'card')}`}
                  d="M17.8747 11.9167H16.958C16.1999 11.9167 15.583 12.5336 15.583 13.2917V14.2083C15.583 14.9664 16.1999 15.5833 16.958 15.5833H17.8747C18.6328 15.5833 19.2497 14.9664 19.2497 14.2083V13.2917C19.2497 12.5336 18.6328 11.9167 17.8747 11.9167ZM18.333 14.2084C18.333 14.4614 18.1277 14.6667 17.8747 14.6667H16.958C16.705 14.6667 16.4997 14.4614 16.4997 14.2084V13.2917C16.4997 13.0387 16.705 12.8334 16.958 12.8334H17.8747C18.1277 12.8334 18.333 13.0387 18.333 13.2917V14.2084Z"
                  fill="#000"
                />
              </g>
              <defs>
                <clipPath id="clip0_25_525">
                  <rect width="22" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p>Картой</p>
          </div>
        </div>

        {paymentType === 'cash' && (
          <div className="form__change">
            <div className="form__change__checkbox-area">
              <input
                type="checkbox"
                id="change"
                onChange={(e) =>
                  setFormData({ ...formData, ...formData.change, isChange: e.target.checked })
                }
              />
              <label htmlFor="change">Подготовить сдачу с</label>
            </div>
            <Input
              className="order__form__item order__form_border-radius order__form_width order__input form__change_input"
              placeholder="Сумма"
              type="number"
              onChange={(e) =>
                formData.isChange ? setFormData({ ...formData, changesSum: e.target.value }) : null
              }
              disabled={!formData.isChange}
            />
          </div>
        )}
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
        <div className="form__shipping-time form__toggle order__form_border-radius order__form_width ">
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
