import React, { useState } from "react";
import "./select.css";

const Select = ({ className, value, options, onChange }) => {
  const [classRotate, setClassRotate] = useState("");

  return (
    <div className={`select ${classRotate}`}>
      <select
        className={`${className}__text`}
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
        onFocus={() => setClassRotate("select_rotate")}
        onBlur={() => setClassRotate("")}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
