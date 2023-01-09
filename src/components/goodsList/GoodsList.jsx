import React, { useContext } from 'react';
import './GoodsList.css';
import { useSelector } from 'react-redux';
import GoodsItem from '../goodItem/GoodsItem';
import { useSortedItems } from '../../hooks/useFilter';
import appContext from '../../context';
import { selectAllGoods } from '../../store/reducers/goodsSlice';

function GoodsList({ id }) {
  const goods = useSelector(selectAllGoods).filter((good) => good.category === Number(id));
  const { filter } = useContext(appContext);
  const sortedGoods = useSortedItems(goods, filter.sort);

  if (sortedGoods.length === 0) {
    return <h1 className="not-found__name">Ничего не найдено</h1>;
  }
  return (
    <div className="goods__list">
      {sortedGoods.map((good) => (
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
