import React from 'react';
import plural from 'plural-ru';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../UI/Button/Button';
import './goodsItem.css';
import { selectGoodById, selectGoodWeight } from '../../store/reducers/goodsSlice';
import { setCartItem } from '../../store/reducers/cartSlice';

function GoodsItem({ id, linkParams }) {
  const good = useSelector((state) => selectGoodById(state, id));
  const weight = useSelector((state) => selectGoodWeight(state, id));

  const dispatch = useDispatch();
  const pieces = good.pieces ? good.pieces : ' ';

  const setCartItemHandler = linkParams ? null : () => dispatch(setCartItem({ id, type: 'good' }));

  return (
    <div className="goods__item">
      <img
        className="goods__item-img"
        src="http://via.placeholder.com/250x203.svg"
        alt={good.russianName}
      />
      <div className="goods__item-description">
        <div className="goods__item-header">
          <p className="goods__item-name">{good.russianName}</p>
          <p className="goods__item-weight goods__item-pieces">
            {weight} грамм, {plural(pieces, '%d кусочек', '%d кусочка', '%d кусочков')}
          </p>
        </div>
        <div className="goods__item-footer">
          <p className="goods__item-price">{good.price * good.pieces} COM</p>
          <Link to={linkParams}>
            <Button className="goods__item_" onClick={setCartItemHandler}>
              Хочу!
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GoodsItem;
