import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../style/Goods.css';
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
import CartModal from '../components/CartModal/CartModal';

function Goods() {
  const { categoryId } = useParams();

  const category = useSelector((state) => selectCategoryById(state, categoryId));
  const goods = useSelector(selectAllGoods);

  const { filter, setFilter, isLaptop, isTablet, isDesktop, publicUrl } = useContext(appContext);
  const sortedAndSearchedGoods = useFilter(goods, filter.sort, filter.query);

  if (isTablet || isLaptop) {
    return (
      <div className="goods">
        {isLaptop && <SideMenu />}
        <div className="goods__container container">
          {isLaptop && <Header />}
          <div className="goods__content content__container">
            <div className="goods__header-container">
              <div className="goods__header">
                <img
                  className="goods__img"
                  src={`${publicUrl}/media/goods/goods__logo.svg`}
                  alt="Товары"
                />
                <p className="goods__name">{category.russianName}</p>
              </div>
              <Select
                className="goods"
                options={[
                  { value: 'default', name: 'По умолчанию' },
                  { value: 'name', name: 'По названию' },
                  { value: 'weight', name: 'По весу' },
                  { value: 'pieces', name: 'По количеству' },
                  { value: 'price', name: 'По цене' },
                ]}
                filter={filter}
                setFilter={setFilter}
              />
            </div>

            <GoodsList sortedAndSearchedGoods={sortedAndSearchedGoods} id={categoryId} />
            <About className="about" />
            {isLaptop && <MainFooter />}
          </div>
        </div>
        {isLaptop && <CartModal />}
        {isDesktop && <Cart />}
      </div>
    );
  }

  return (
    <div className="goods">
      <div className="goods__header">
        <img className="goods__img" src={`${publicUrl}/media/goods/goods__logo.svg`} alt="" />
        <p className="goods__name">{category.russianName}</p>
      </div>
      <Select
        className="goods"
        options={[
          { value: 'default', name: 'По умолчанию' },
          { value: 'name', name: 'По названию' },
          { value: 'weight', name: 'По весу' },
          { value: 'pieces', name: 'По количеству' },
          { value: 'price', name: 'По цене' },
        ]}
        filter={filter}
        setFilter={setFilter}
      />
      <GoodsList
        className="goods__list"
        sortedAndSearchedGoods={sortedAndSearchedGoods}
        id={categoryId}
      />
      <About className="about" />
      <Menu />
    </div>
  );
}

export default Goods;
