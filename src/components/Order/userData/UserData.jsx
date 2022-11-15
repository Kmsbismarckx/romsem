import React from 'react';
import Input from '../../UI/Input/Input';

function UserData({ formData, setFormData }) {
  return (
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
  );
}

export default UserData;
