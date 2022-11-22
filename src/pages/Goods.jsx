import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../style/Goods.css';
import Filter from '../components/filter/Filter';
import GoodsList from '../components/goodsList/GoodsList';
import About from '../components/About/About';
import useFilter from '../hooks/useFilter';
import { selectCategoryById } from '../store/reducers/categoriesSlice';
import { selectAllGoods } from '../store/reducers/goodsSlice';
import Menu from '../components/menu/Menu';
import appContext from '../context';
import SideMenu from '../components/sideMenu/SideMenu';
import Cart from './Cart';
import Header from '../components/Header/Header';
import MainFooter from '../components/mainFooter/MainFooter';

function Goods() {
  const { id } = useParams();

  const category = useSelector((state) => selectCategoryById(state, id));
  const goods = useSelector(selectAllGoods);

  const { filter, setFilter, isDesktop, isTablet } = useContext(appContext);
  const sortedAndSearchedGoods = useFilter(goods, filter.sort, filter.query);

  if (isTablet || isDesktop) {
    return (
      <div className="goods pc__container tablet__container">
        {isDesktop && <SideMenu />}
        <div className="pc__main">
          {isDesktop && <Header />}
          <div className="goods__header__container">
            <div className="goods__header">
              <img className="goods__header__img" src="/media/goods/goods__logo.svg" alt="" />
              <p className="goods__header__name">{category.russianName}</p>
            </div>
            <Filter className="filter" filter={filter} setFilter={setFilter} />
          </div>

          <GoodsList
            className="goods__list"
            sortedAndSearchedGoods={sortedAndSearchedGoods}
            id={id}
          />
          <About className="about" />
          <MainFooter />
        </div>
        {isDesktop && (
          <div className="cart__container">
            <Cart />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="goods">
      <div className="goods__header">
        <img className="goods__header__img" src="/media/goods/goods__logo.svg" alt="" />
        <p className="goods__header__name">{category.russianName}</p>
      </div>
      <Filter className="filter" filter={filter} setFilter={setFilter} />
      <GoodsList className="goods__list" sortedAndSearchedGoods={sortedAndSearchedGoods} id={id} />
      <About className="about" />
      <Menu />
    </div>
  );
}

export default Goods;
