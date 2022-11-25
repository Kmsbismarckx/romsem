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
import Select from '../components/UI/Select/Select';

function Goods() {
  const { id } = useParams();

  const category = useSelector((state) => selectCategoryById(state, id));
  const goods = useSelector(selectAllGoods);

  const { filter, setFilter, isDesktop, isTablet } = useContext(appContext);
  const sortedAndSearchedGoods = useFilter(goods, filter.sort, filter.query);

  if (isTablet || isDesktop) {
    return (
      <div className="goods">
        {isDesktop && <SideMenu />}
        {isDesktop && <Header />}
        <div className="goods__header-container">
          <div className="goods__header">
            <img className="goods__img" src="/media/goods/goods__logo.svg" alt="" />
            <p className="goods__name">{category.russianName}</p>
          </div>
          <Select
            onChange={(selectedSort) => {
              setFilter({ ...filter, sort: selectedSort });
            }}
            options={[
              { value: 'default', name: 'По умолчанию' },
              { value: 'name', name: 'По названию' },
              { value: 'weight', name: 'По весу' },
              { value: 'pieces', name: 'По количеству' },
              { value: 'price', name: 'По цене' },
            ]}
            value={filter.sort}
          />
        </div>

        <GoodsList sortedAndSearchedGoods={sortedAndSearchedGoods} id={id} />
        <About className="about" />
        <MainFooter />
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
        <img className="goods__img" src="/media/goods/goods__logo.svg" alt="" />
        <p className="goods__name">{category.russianName}</p>
      </div>
      <Select
        onChange={(selectedSort) => {
          setFilter({ ...filter, sort: selectedSort });
        }}
        options={[
          { value: 'default', name: 'По умолчанию' },
          { value: 'name', name: 'По названию' },
          { value: 'weight', name: 'По весу' },
          { value: 'pieces', name: 'По количеству' },
          { value: 'price', name: 'По цене' },
        ]}
        value={filter.sort}
      />
      <GoodsList className="goods__list" sortedAndSearchedGoods={sortedAndSearchedGoods} id={id} />
      <About className="about" />
      <Menu />
    </div>
  );
}

export default Goods;
