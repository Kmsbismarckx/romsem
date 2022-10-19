import React from 'react';
import './GoodsList.css';
import GoodsItem from '../goodItem/GoodsItem';

function GoodsList({ sortedAndSearchedGoods, className, id }) {
  return (
    <div className={className}>
      {sortedAndSearchedGoods.map((good) => (
        <GoodsItem
          key={good.id}
          className={`${className}_item`}
          good={good}
          id={id}
          params={`/home/${id}/${good.id}`}
        />
      ))}
    </div>
  );
}

export default GoodsList;
