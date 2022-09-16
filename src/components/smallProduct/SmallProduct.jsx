import React from "react";

const SmallProduct = ({ name, price, imgURL, className }) => {
  return (
    <div className={className}>
      <img className={`${className}_img`} src={imgURL} alt={name} />
      <p className={`${className}_name`}>{name}</p>
      <p className={`${className}_price`}>{price} СОМ</p>
    </div>
  );
};

export default SmallProduct;
