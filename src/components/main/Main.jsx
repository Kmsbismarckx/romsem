import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import plural from 'plural-ru';
import './main.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import useFilter from '../../hooks/useFilter';
import {
  selectAllCategories,
  selectCategoryIds,
  selectPopularCategoriesIds,
} from '../../store/reducers/categoriesSlice';
import appContext from '../../context';
import Header from '../Header/Header';
import Button from '../UI/Button/Button';
import Category from '../category/Category';
import {
  selectAllGoods,
  selectGoodIds,
  selectNewGoods,
  selectPopularGoods,
} from '../../store/reducers/goodsSlice';
import GoodsItem from '../goodItem/GoodsItem';
import About from '../About/About';
import MainFooter from '../mainFooter/MainFooter';
import { setCartItem } from '../../store/reducers/cartSlice';

function Main() {
  const dispatch = useDispatch();

  const { filter, isDesktop, isTablet } = useContext(appContext);
  const categories = useSelector(selectAllCategories);
  const categoriesIds = useSelector(selectCategoryIds);
  const popularCategoriesIds = useSelector(selectPopularCategoriesIds);

  const goods = useSelector(selectAllGoods);
  const goodsIds = useSelector(selectGoodIds);
  const newGoods = useSelector(selectNewGoods);
  const popularGoods = useSelector(selectPopularGoods);

  const sortedAndSearchedCategories = useFilter(categories, filter.sort, filter.query);

  const [slideGoods, setSlideGoods] = useState(1);
  const [goodsItems, setGoodsItems] = useState('new');

  if (isTablet || isDesktop) {
    return (
      <div className="main pc__main">
        {isDesktop && <Header />}
        <div className="main__content">
          {!isDesktop && (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              effect
              speed={800}
              slidesPerView={1}
              grabCursor
              loop
              className="categories__swiper"
            >
              {goods.map((good) => (
                <SwiperSlide key={good.id}>
                  <Category id={good.id} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            effect
            speed={800}
            slidesPerView={1}
            grabCursor
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            className="goods__swiper"
            onSlideChange={(swiper) => {
              setSlideGoods(swiper.realIndex);
            }}
          >
            {goods.map((good) => (
              <SwiperSlide key={good.id}>
                <div
                  className="goods__swiper-item"
                  style={{
                    background: `url("https://via.placeholder.com/800x470")`,
                  }}
                >
                  <div className="goods__swiper-item-content">
                    <div className="goods__swiper-item-title">
                      <h1 className="goods__swiper-item-name">&quot;{good.russianName}&quot;</h1>
                      <p className="goods__swiper-item-pieces">
                        {good.weight} грамм{' '}
                        {plural(good.pieces, '%d кусочек', '%d кусочка', '%d кусочков')}
                      </p>
                    </div>
                    <div className="goods__swiper-item-price">
                      <p className="goods__swiper-item-initial-price">{good.price} COM</p>
                      <p className="goods__swiper-item-sale-price">Скидка COM</p>
                    </div>
                    <Button
                      className="goods__swiper-item-content_"
                      onClick={() => dispatch(setCartItem({ id: good.id }))}
                    >
                      Хочу
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="swiper__indicators">
          {goodsIds.map((id, index) => {
            let classSelected = '';
            if (index === slideGoods) {
              classSelected = 'swiper__indicator_selected';
            } else {
              classSelected = '';
            }
            return <div key={id} className={`swiper__indicator ${classSelected}`} />;
          })}
        </div>
        <div className="main__popular-categories">
          {popularCategoriesIds.map((id) => (
            <Category key={id} id={id} />
          ))}
        </div>
        <div className="main__goods-select">
          <p
            className={`goods-select__item goods-select__item${
              goodsItems === 'popular' ? '_selected' : ''
            }`}
            onClick={() => {
              setGoodsItems('popular');
            }}
          >
            <span>Новинки</span>
          </p>
          <p
            className={`goods-select__item goods-select__item${
              goodsItems === 'new' ? '_selected' : ''
            }`}
            onClick={() => {
              setGoodsItems('new');
            }}
          >
            <span>Популярное</span>
          </p>
        </div>
        <div className="goods-items__content">
          <Swiper
            modules={[Navigation, Pagination]}
            effect
            speed={800}
            slidesPerView={3}
            grabCursor
            navigation
            spaceBetween={31}
            className="goods-items__swiper"
          >
            {goodsItems === 'new'
              ? newGoods.map((good) => (
                  <SwiperSlide key={good.id}>
                    <GoodsItem id={good.id} className="goods__item" />
                  </SwiperSlide>
                ))
              : popularGoods.map((good) => (
                  <SwiperSlide key={good.id}>
                    <GoodsItem id={good.id} className="goods__item" />
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
        {isTablet && <About />}
        <MainFooter />
      </div>
    );
  }

  if (!sortedAndSearchedCategories.length) {
    return (
      <ul className="main not-found">
        <h1 className="not-found__name">Ничего не найдено</h1>
      </ul>
    );
  }

  return (
    <ul className="main">
      {sortedAndSearchedCategories.map((category) => (
        <Category key={category.id} id={category.id} />
      ))}
    </ul>
  );
}

export default Main;
