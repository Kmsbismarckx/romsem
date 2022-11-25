import React, { useState } from 'react';
import './select.css';

function Select({ className, value, options, onChange }) {
  const [classRotate, setClassRotate] = useState('');
  const rotateHandler = () => {
    if (classRotate) {
      setClassRotate('');
    } else {
      setClassRotate('select_rotate');
    }
  };

  return (
    <div className={`select ${classRotate}`}>
      <select
        className="select__text"
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
        onClick={rotateHandler}
        onBlur={() => setClassRotate('')}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
