import React from "react";

const BasketItem = ({ className, basketItem, quantity }) => {
  return (
    <div className={`${className}_content`}>
      <img
        className={`${className}_img`}
        src={`/media/goods/${basketItem.name}.png`}
        alt={basketItem.name}
      />
      <div className={`${className}_content_header`}>
        <p className={`${className}_content_header_name`}>
          {basketItem.russianName}
        </p>
        <div className={`${className}_content_footer`}>
          <div className={`${className}_content_footer_quantity`}>
            {quantity}
          </div>
          <p className={`${className}_content_footer_price`}>
            {basketItem.price} СОМ
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
