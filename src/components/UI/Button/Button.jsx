import React from "react";
import "./button.css";

const Button = ({ children, className, onClick, disabled }) => {
  return (
    <button
      className={"button " + `${className}_button`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
