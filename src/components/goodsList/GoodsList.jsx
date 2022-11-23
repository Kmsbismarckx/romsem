import React from 'react';
import './GoodsList.css';
import GoodsItem from '../goodItem/GoodsItem';

function GoodsList({ sortedAndSearchedGoods, id }) {
  if (sortedAndSearchedGoods.length === 0) {
    return <h1 className="not-found__name">Ничего не найдено</h1>;
  }
  return (
    <div className="goods__list">
      {sortedAndSearchedGoods.map((good) => (
        <GoodsItem
          key={good.id}
          className="goods__item"
          id={good.id}
          linkParams={`/home/${id}/${good.id}`}
        />
      ))}
    </div>
  );
}

export default GoodsList;
