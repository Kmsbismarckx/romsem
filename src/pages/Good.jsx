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
import { selectAllGoods, selectGoodById } from '../store/reducers/goodsSlice';

function Good() {
  const { categoryId, goodId } = useParams();

  const good = useSelector((state) => selectGoodById(state, Number(goodId)));
  const goodsLength = useSelector(selectAllGoods).length;
  const { composition } = good;

  const [currentGoodId, setCurrentGoodId] = useState(Number(goodId));
  const [previousGood, setPreviousGood] = useState({
    visibility: 'visible',
    pointerEvent: '',
  });
  const [nextGood, setNextGood] = useState({
    visibility: 'hidden',
    pointerEvent: '',
  });

  const AboutMemo = React.memo(About);

  usePages({
    goodId: Number(goodId),
    itemLength: goodsLength,
    nextGood,
    setNextGood,
    previousGood,
    setPreviousGood,
  });

  return (
    <div className="good">
      <div className="good__buttons">
        <Button className="good_" style={{ visibility: previousGood.visibility }}>
          <Link
            className="button__link"
            style={{
              pointerEvents: previousGood.pointerEvent,
            }}
            onClick={() => {
              if (currentGoodId > 1) {
                setCurrentGoodId(currentGoodId - 1);
              }
            }}
            to={`/home/${categoryId}/${currentGoodId - 1}`}
          >
            Назад
          </Link>
        </Button>
        <Button className="good_" style={{ visibility: nextGood.visibility }}>
          <Link
            className="button__link"
            style={{
              pointerEvents: nextGood.pointerEvent,
            }}
            onClick={() => {
              if (currentGoodId <= goodsLength) setCurrentGoodId(currentGoodId + 1);
            }}
            to={`/home/${categoryId}/${currentGoodId + 1}`}
          >
            Вперед
          </Link>
        </Button>
      </div>
      <div className="good__item">
        <GoodsItem className="good__item_main" id={Number(goodId)} />
        <div className="good__item_composition">
          <p className="good__item_composition_name">Состав сета</p>
          <div className="good__item_composition_items">
            <Slider pageHeight={127} pageWidth={90.02} pageMargin={10}>
              {composition.map((item) => (
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
            {composition.map((item) => (
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
      <AboutMemo />
    </div>
  );
}

export default Good;
