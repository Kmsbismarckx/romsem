import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../style/Good.css';
import '../components/smallProduct/smallProduct.css';
import { useSelector } from 'react-redux';
import Button from '../components/UI/Button/Button';
import GoodsItem from '../components/goodItem/GoodsItem';
import SmallProduct from '../components/smallProduct/SmallProduct';
import Slider from '../components/UI/Slider/Slider';
import About from '../components/about/About';
import usePages from '../hooks/usePages';
import goodItemOnClick from '../helpers/goodItemOnclick';

function Good() {
  const { categoryId, goodId } = useParams();
  const goods = useSelector((state) => state.goodsReducer.goods);
  const currentGood = goods[goodId];
  const [currentPage, setCurrentPage] = useState(+goodId);
  const [leftButton, setLeftButton] = useState({
    isDisabled: false,
    pointerEvent: '',
  });
  const [rightButton, setRightButton] = useState({
    isDisabled: false,
    pointerEvent: '',
  });

  usePages({
    currentPage,
    itemLength: Object.keys(goods).length,
    rightButton,
    setRightButton,
    leftButton,
    setLeftButton,
  });

  return (
    <div className="good">
      <div className="good__buttons">
        <Button
          className="good_"
          disabled={leftButton.isDisabled}
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
        >
          <Link
            className="button__link"
            style={{
              pointerEvents: leftButton.pointerEvent,
            }}
            to={`/home/${categoryId}/${currentPage - 1}`}
          >
            Назад
          </Link>
        </Button>
        <Button
          className="good_"
          disabled={rightButton.isDisabled}
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
        >
          <Link
            className="button__link"
            style={{
              pointerEvents: rightButton.pointerEvent,
            }}
            to={`/home/${categoryId}/${currentPage + 1}`}
          >
            Вперед
          </Link>
        </Button>
      </div>
      <div className="good__item">
        <GoodsItem
          className="good__item_main"
          good={currentGood}
          onClick={() => goodItemOnClick(currentGood)}
        />
        <div className="good__item_composition">
          <p className="good__item_composition_name">Состав сета</p>
          <div className="good__item_composition_items">
            <Slider pageHeight={127} pageWidth={90.02} pageMargin={10}>
              {currentGood.composition.map((item) => (
                <SmallProduct
                  key={item.id}
                  className="good__item_composition_item"
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
        <p className="good__addition_name">Рекомендуем к этому товару</p>
        <div className="good__addition_items">
          <Slider pageHeight={121} pageWidth={107} pageMargin={15}>
            {currentGood.composition.map((item) => (
              <SmallProduct
                key={item.id}
                className="good__addition_item"
                name={item.russianName}
                price={item.price}
                imgURL="/media/good/philadelphia_circle.png"
              >
                <img
                  className="good__addition_item_button"
                  src="/media/good/add_button.svg"
                  alt="Добавить"
                />
              </SmallProduct>
            ))}
          </Slider>
        </div>
      </div>
      <About className="about" />
    </div>
  );
}

export default Good;
