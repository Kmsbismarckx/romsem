import React from 'react';
import Input from '../../UI/Input/Input';
import './AddressInfo.css';

function AddressInfo({
  shippingType,
  shippingTypeHandler,
  activeClassHandler,
  formData,
  setFormData,
}) {
  return (
    <div className="form__type-of-shipping__container">
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
    </div>
  );
}

export default AddressInfo;
