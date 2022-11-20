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
import Slider from '../components/UI/Slider/Slider';
import About from '../components/About/About';
import { selectGoodById } from '../store/reducers/goodsSlice';
import Menu from '../components/menu/Menu';
import appContext from '../context';
import SideMenu from '../components/sideMenu/SideMenu';
import Cart from './Cart';
import GoodButtons from '../components/goodButtons/GoodButtons';
import Header from '../components/Header/Header';
import Quantity from '../components/quantity/Quantity';
import Button from '../components/UI/Button/Button';
import { setCartItem } from '../store/reducers/cartSlice';
import MainFooter from '../components/mainFooter/MainFooter';

function Good() {
  const dispatch = useDispatch();
  const { isDesktop } = useContext(appContext);
  const { categoryId, goodId } = useParams();

  const good = useSelector((state) => selectGoodById(state, Number(goodId)));
  const { composition } = good;

  const AboutMemo = React.memo(About);

  if (isDesktop) {
    return (
      <div className="good pc__container">
        <SideMenu />
        <div className="good__main">
          <Header />
          <GoodButtons categoryId={categoryId} goodId={goodId} />
          <div className="good__item">
            <img className="good__item-img" src="https://via.placeholder.com/620x435" alt="" />
            <div className="good__item-content">
              <h1 className="good__item-name">{good.russianName}</h1>
              <p className="good__item-weight">
                {plural(good.weight, '%d грамм', '%d грамма', '%d грамм')}
              </p>
              <div className="good__item-pieces-container">
                <p className="good__item-pieces">XXX</p>
                <Quantity
                  quantity={null}
                  decreaseQuantityHandler={null}
                  increaseQuantityHandler={null}
                />
              </div>
              <div className="good__item-composition-container">
                <p className="good__item-composition">Состав</p>
                <p className="good__item-description">XXX</p>
              </div>
              <Button
                className="good__item-button "
                onClick={() => dispatch(setCartItem({ goodId }))}
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
              spaceBetween={130}
              grabCursor
              navigation
            >
              {composition.map((item) => (
                <SwiperSlide className="good__swiper-slide">
                  <SmallProduct
                    key={item.id}
                    className="good__addition-item"
                    name={item.russianName}
                    price={item.price}
                    imgURL="/media/good/philadelphia_circle.png"
                  >
                    <img
                      className="good__addition-item-button"
                      src="/media/good/add_button.svg"
                      alt="Добавить"
                    />
                  </SmallProduct>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <MainFooter />
        </div>
        <div className="cart__container">
          <Cart />
        </div>
      </div>
    );
  }

  return (
    <div className="good">
      <GoodButtons categoryId={categoryId} goodId={goodId} />
      <div className="good__item">
        <GoodsItem className="good__item_main" id={Number(goodId)} />
        <div className="good__item_composition">
          <p className="good__item_composition__name">Состав сета</p>
          <div className="good__item_composition__items">
            <Slider pageHeight={127} pageWidth={90.02} pageMargin={10}>
              {composition.map((item) => (
                <SmallProduct
                  key={item.id}
                  className="good__item_composition__item"
                  name={item.russianName}
                  price={item.price}
                  imgURL="/media/good/philadelphia_circle.png"
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="good__addition">
        <p className="good__addition__name">Рекомендуем к этому товару</p>
        <div className="good__addition__items">
          <Slider pageHeight={121} pageWidth={107} pageMargin={15}>
            {composition.map((item) => (
              <SmallProduct
                key={item.id}
                className="good__addition__item"
                name={item.russianName}
                price={item.price}
                imgURL="/media/good/philadelphia_circle.png"
              >
                <img
                  className="good__addition__item__button"
                  src="/media/good/add_button.svg"
                  alt="Добавить"
                />
              </SmallProduct>
            ))}
          </Slider>
        </div>
      </div>
      <AboutMemo />
      <Menu />
    </div>
  );
}

export default Good;
