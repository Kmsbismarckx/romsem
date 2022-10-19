import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../style/Goods.css';
import urlContext from '../context';
import Filter from '../components/filter/Filter';
import GoodsList from '../components/goodsList/GoodsList';
import About from '../components/about/About';
import useFilter from '../hooks/useFilter';

function Goods() {
  const { id } = useParams();
  const categories = useSelector((state) => state.categoryReducer.categories);
  const goods = useSelector((state) => state.goodsReducer.goods);
  const goodsId = useSelector((state) => state.goodsReducer.goodsId);
  const goodsArray = [];

  goodsId.forEach((item) => {
    goodsArray.push(goods[item]);
  });

  const { filter, setFilter } = useContext(urlContext);
  const sortedAndSearchedGoods = useFilter(goodsArray, filter.sort, filter.query);

  return (
    <div className="goods">
      <div className="goods__header">
        <img className="goods__header_img" src="/public/media/goods/goods__logo.svg" alt="" />
        <p className="goods__header_name">{categories[id].russianName}</p>
      </div>
      <Filter className="filter" filter={filter} setFilter={setFilter} />
      <GoodsList className="goods__list" sortedAndSearchedGoods={sortedAndSearchedGoods} id={id} />
      <About className="about" />
    </div>
  );
}

export default Goods;
