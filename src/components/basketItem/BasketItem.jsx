import React, { useState } from 'react';
import './basketItem.css';
import { useSelector } from 'react-redux';

function BasketItem({ id, basket, setBasket }) {
  const items = useSelector((state) => state.goodsReducer.goods);
  const [quantity, setQuantity] = useState(
    JSON.parse(localStorage.getItem('basket'))[id].value || {}
  );
  console.log(basket[id]);
  const basketItem = items[id];
  // useEffect(() => {
  //   basket[id].value = quantity;
  //   localStorage.setItem('basket', JSON.stringify(basket));
  // }, [quantity]);

  return (
    <div className="basket__item">
      <img
        className="basket__item_img"
        src={`/media/goods/${basketItem.name}.png`}
        alt={basketItem.name}
      />
      <div className="basket__item_content">
        <p className="basket__item_content_name">{basketItem.russianName}</p>
        <div className="basket__item_content_description">
          <div className="basket__item_content_description_item">
            <div
              className="basket__item_content_description_item_decrement"
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                }
              }}
            >
              <img src="/media/basket/basket_decrement.svg" alt="" />
            </div>
            <div className="basket__item_content_description_item_quantity">{quantity}</div>
            <div
              className="basket__item_content_description_item_increment"
              onClick={() => {
                setQuantity(quantity + 1);
              }}
            />
          </div>
          <p className="basket__item_content_description_item basket__item_content_description_item_price">
            {basketItem.price * basket[id].value} СОМ
          </p>
        </div>
      </div>
    </div>
  );
}

export default BasketItem;
