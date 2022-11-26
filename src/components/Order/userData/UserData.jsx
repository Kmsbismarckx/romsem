import React from 'react';
import Input from '../../UI/Input/Input';

function UserData({ formData, setFormData }) {
  return (
    <div className="form__user-data">
      <Input
        className="form__last-name form__item form__input"
        placeholder="Фамилия"
        pattern="^[А-Яа-яЁёA-Za-z\s]+$"
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />
      <Input
        className="form__first-name form__item form__input"
        placeholder="Имя"
        pattern="^[А-Яа-яЁёA-Za-z\s]+$"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
    </div>
  );
}

export default UserData;
