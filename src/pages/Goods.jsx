import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "../style/Goods.css";
import { urlContext } from "../context";
import Filter from "../components/filter/Filter";
import GoodsList from "../components/goodsList/GoodsList";
import About from "../components/about/About";
import { useFilter } from "../hooks/useFilter";

const Goods = () => {
  const { id } = useParams();
  const categories = useSelector((state) => state.foodReducer.categories);
  const { urlPrefix } = useContext(urlContext);
  /*Здесь можно реализовать подтягивание данных с сервера*/
  const goods = useSelector((state) => state.goodsReducer.goods);
  const { filter, setFilter } = useContext(urlContext);
  const sortedAndSearchedGoods = useFilter(goods, filter.sort, filter.query);

  return (
    <div className="goods">
      <div className="goods__header">
        <img
          className="goods__header_img"
          src={urlPrefix + "/media/goods/goods__logo.svg"}
          alt=""
        />
        <p className="goods__header_name">
          {categories[id - 1]["russianName"]}
        </p>
      </div>
      <Filter className="filter" filter={filter} setFilter={setFilter} />
      <GoodsList
        className="goods__list"
        goods={sortedAndSearchedGoods}
        goodsId={id}
      />
      <About className="about" />
    </div>
  );
};

export default Goods;
