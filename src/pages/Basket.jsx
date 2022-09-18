import React from "react";
import "../style/Basket.css";
import BasketItem from "../components/basketItem/BasketItem";

const Basket = ({ className }) => {
  const basket = JSON.parse(localStorage.getItem("basket"));

  if (basket.length === 0) {
    return (
      <div className={className}>
        <h1>Ваша корзина пуста.</h1>
        <p>Добавьте же скорее чего нибудь!</p>
      </div>
    );
  }
  return (
    <div className={className}>
      <h2>Корзина</h2>
      {basket.map((basketItem) => (
        <BasketItem
          className="basket"
          basketItem={basketItem}
          quantity={basket.length}
        />
      ))}
    </div>
  );
};

export default Basket;
