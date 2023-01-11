import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import '../style/Good.css';
import '../components/smallProduct/smallProduct.css';
import { useDispatch, useSelector } from 'react-redux';
import plural from 'plural-ru';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import GoodsItem from '../components/goodItem/GoodsItem';
import SmallProduct from '../components/smallProduct/SmallProduct';
import About from '../components/About/About';
import {
  addPieces,
  removePieces,
  selectGoodById,
  selectGoodPrice,
  selectGoodWeight,
} from '../store/reducers/goodsSlice';
import Menu from '../components/menu/Menu';
import appContext from '../context';
import SideMenu from '../components/sideMenu/SideMenu';
import GoodButtons from '../components/goodButtons/GoodButtons';
import Header from '../components/Header/Header';
import Quantity from '../components/quantity/Quantity';
import Button from '../components/UI/Button/Button';
import { setCartItem } from '../store/reducers/cartSlice';
import MainFooter from '../components/mainFooter/MainFooter';
import CartModal from '../components/CartModal/CartModal';
import Cart from './Cart';
import { selectAllAdditional } from '../store/reducers/additionalSlice';

function Good() {
  const AboutMemo = React.memo(About);
  const dispatch = useDispatch();
  const { categoryId, goodId } = useParams();
  const { isLaptop, isTablet, isDesktop, publicUrl } = useContext(appContext);

  const good = useSelector((state) => selectGoodById(state, Number(goodId)));
  const goodPrice = useSelector((state) => selectGoodPrice(state, goodId));
  const additional = useSelector(selectAllAdditional);
  console.log(additional);
  const weight = useSelector((state) => selectGoodWeight(state, goodId));

  const increaseQuantityHandler = () => {
    dispatch(addPieces({ id: Number(goodId) }));
  };
  const decreaseQuantityHandler = () => {
    dispatch(removePieces({ id: Number(goodId) }));
  };

  const setCartItemHandler = (id, type) => dispatch(setCartItem({ id, type }));

  if (isTablet || isLaptop) {
    return (
      <div className="good">
        {isLaptop && <SideMenu />}
        <div className="good__main container">
          {isLaptop && <Header />}
          <div className="good__content content__container">
            <GoodButtons categoryId={categoryId} goodId={Number(goodId)} />
            <div className="good__item">
              <img className="good__item-img" src="https://via.placeholder.com/620x435" alt="" />
              <div className="good__item-content">
                <h1 className="good__item-name">{good.russianName}</h1>
                <p className="good__item-weight">
                  {plural(weight, '%d грамм', '%d грамма', '%d грамм')}
                </p>
                <div className="good__item-price-container">
                  <p className="good__item-price">{goodPrice} COM</p>
                  <Quantity
                    quantity={good.pieces}
                    decreaseQuantityHandler={decreaseQuantityHandler}
                    increaseQuantityHandler={increaseQuantityHandler}
                  />
                </div>
                <div className="good__item-composition-container">
                  <p className="good__item-composition">Состав</p>
                  <p className="good__item-description">XXX</p>
                </div>
                <Button
                  className="good__item-button "
                  onClick={() => setCartItemHandler(Number(goodId), 'good')}
                >
                  Хочу
                </Button>
              </div>
            </div>
            <div className="good__swiper-wrapper">
              <Swiper
                className="good__swiper"
                modules={[Navigation, Pagination, Autoplay]}
                effect
                speed={800}
                slidesPerView={3}
                spaceBetween={30}
                grabCursor
                navigation={good.composition.length > 3}
              >
                {additional.map((item) => (
                  <SwiperSlide className="good__swiper-slide" key={item.id}>
                    <SmallProduct
                      key={item.id}
                      className="good__addition-item"
                      name={item.russianName}
                      price={item.price}
                      imgUrl={`media/additional/${item.img}.png`}
                    >
                      <img
                        className="good__addition-item-button"
                        src={`${publicUrl}/media/good/add_button.svg`}
                        alt="Добавить"
                        onClick={() => setCartItemHandler(item.id, 'additional')}
                      />
                    </SmallProduct>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <About />
            {isLaptop && <MainFooter />}
          </div>
        </div>
        {isLaptop && <CartModal />}
        {isDesktop && <Cart />}
      </div>
    );
  }

  return (
    <div className="good">
      <GoodButtons categoryId={categoryId} goodId={goodId} />
      <div className="good__item">
        <GoodsItem id={Number(goodId)} />
        <div className="good__item-composition">
          <p className="good__item-name">Состав сета</p>
          <div className="good__item-swiper-wrapper">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              effect
              speed={800}
              slidesPerView={2}
              spaceBetween={10}
              grabCursor
              navigation
              className="composition-swiper"
            >
              {good.composition.map((item) => (
                <SwiperSlide>
                  <SmallProduct
                    key={item.id}
                    className=""
                    name={item.russianName}
                    price={item.price}
                    imgURL="media/good/philadelphia_circle.png"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="good__addition">
        <p className="good__addition-name">Рекомендуем к этому товару</p>
        <div className="good__addition-items">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            effect
            speed={800}
            slidesPerView={2}
            spaceBetween={10}
            grabCursor
            navigation
            className="good__item-swiper"
          >
            {additional.map((item) => (
              <SwiperSlide>
                <SmallProduct
                  key={item.id}
                  className="good__addition-item"
                  name={item.russianName}
                  price={item.price}
                  imgURL="media/good/philadelphia_circle.png"
                >
                  <img
                    className="good__addition-button"
                    src={`${publicUrl}/media/good/add_button.svg`}
                    alt="Добавить"
                    onClick={() => setCartItemHandler(item.id, 'additional')}
                  />
                </SmallProduct>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <AboutMemo />
      <Menu />
    </div>
  );
}

export default Good;
