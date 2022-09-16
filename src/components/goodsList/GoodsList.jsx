import React from "react";
import "./GoodsList.css";
import GoodsItem from "../goodItem/GoodsItem";

const GoodsList = ({ goods, className, goodsId }) => {
  return (
    <div className={className}>
      {goods.map((good) => (
        <GoodsItem
          key={good.id}
          className={`${className}_item`}
          good={good}
          goodsId={goodsId}
          params={`/home/${goodsId}/${good.id}`}
        />
      ))}
    </div>
  );
};

export default GoodsList;
