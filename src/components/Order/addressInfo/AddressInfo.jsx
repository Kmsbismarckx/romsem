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
    <div className="form__type-of-shipping">
      <div className="form__toggle">
        <div
          className={`form__courier form__toggle-item ${activeClassHandler(
            shippingType,
            'courier'
          )}`}
          onClick={() => shippingTypeHandler('courier')}
        >
          Курьером
        </div>
        <div
          className={`form__self-pickup form__toggle-item ${activeClassHandler(
            shippingType,
            'selfPickup'
          )}`}
          onClick={() => shippingTypeHandler('selfPickup')}
        >
          Самовывоз
        </div>
      </div>
      {shippingType === 'courier' && (
        <div className="form__address-info type-of-shipping__item">
          <Input
            className="form__street form__item form__input "
            placeholder="Улица"
            pattern="^[А-Яа-яЁёA-Za-z\s]+$"
            onChange={(e) =>
              setFormData({ ...formData, ...formData.addressData, street: e.target.value })
            }
          />
          <Input
            className="form__house form__item form__input"
            placeholder="Дом"
            type="number"
            onChange={(e) =>
              setFormData({ ...formData, ...formData.addressData, house: e.target.value })
            }
          />
          <div className="address-info__item">
            <Input
              className="form__flat form__item form__input "
              placeholder="Квартира"
              type="number"
              onChange={(e) =>
                setFormData({ ...formData, ...formData.addressData, flat: e.target.value })
              }
            />
            <Input
              className="form__entrance form__item form__input"
              placeholder="Подъезд"
              type="number"
              onChange={(e) =>
                setFormData({ ...formData, ...formData.addressData, entrance: e.target.value })
              }
            />
          </div>
          <div className="address-info__item">
            <Input
              className="form__floor form__item form__input"
              placeholder="Этаж"
              type="number"
              onChange={(e) =>
                setFormData({ ...formData, ...formData.addressData, floor: e.target.value })
              }
            />
            <Input
              className="form__code form__item form__input"
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
