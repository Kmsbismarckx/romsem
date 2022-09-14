import React from "react";

const Input = (props, className) => {
  return (
    <div className={className}>
      <input {...props} className="input__text" />
    </div>
  );
};

export default Input;
