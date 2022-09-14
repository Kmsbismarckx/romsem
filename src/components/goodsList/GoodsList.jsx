import React from "react";
import "./GoodsList.css";
import GoodItem from "../goodItem/GoodItem";

const GoodsList = ({ goods, className }) => {
  return (
    <div className={className}>
      {goods.map((good) => (
        <GoodItem key={good.id} className={`${className}_item`} good={good} />
      ))}
    </div>
  );
};

export default GoodsList;
