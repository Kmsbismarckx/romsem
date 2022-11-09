import React from 'react';
import Quantity from '../../quantity/Quantity';

function AdditivesItem() {
  return (
    <div className="form__additives-list__item">
      <p className="form__additives-list__name">Палочки + соусник обычные</p>
      <Quantity />
    </div>
  );
}

export default AdditivesItem;
