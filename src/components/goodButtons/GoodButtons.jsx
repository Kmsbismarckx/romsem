import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../UI/Button/Button';
import { selectAllGoods } from '../../store/reducers/goodsSlice';
import usePages from '../../hooks/usePages';

function GoodButtons({ categoryId, goodId }) {
  const goodsLength = useSelector(selectAllGoods).length;

  const [currentGoodId, setCurrentGoodId] = useState(Number(goodId));
  const [previousGood, setPreviousGood] = useState({
    visibility: 'visible',
    pointerEvent: '',
  });
  const [nextGood, setNextGood] = useState({
    visibility: 'hidden',
    pointerEvent: '',
  });

  usePages({
    goodId: Number(goodId),
    itemLength: goodsLength,
    nextGood,
    setNextGood,
    previousGood,
    setPreviousGood,
  });

  return (
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
  );
}

export default GoodButtons;
