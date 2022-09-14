import React from "react";
import "./button.css";

const Button = ({ children, className }) => {
  return (
    <button className={"button " + `${className}_button`}>{children}</button>
  );
};

export default Button;
