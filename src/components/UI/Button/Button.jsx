import React from "react";
import "./button.css";

const Button = ({ children, className, onClick }) => {
  return (
    <button className={"button " + `${className}_button`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
