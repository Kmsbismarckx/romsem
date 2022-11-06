import React, { useEffect, useMemo } from 'react';
import plural from 'plural-ru';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../UI/Button/Button';
import './goodItem.css';
import { selectGoodById } from '../../store/reducers/goodsSlice';
import { increaseQuantity, selectCartItemById, setCartItem } from '../../store/reducers/cartSlice';

function GoodsItem({ className, id, linkParams }) {
  const good = useSelector((state) => selectGoodById(state, id));

  const dispatch = useDispatch();
  const pieces = good.pieces ? good.pieces : ' ';

  const setCartItemHandler = linkParams ? null : () => dispatch(setCartItem({ id }));

  return (
    <div className={className}>
      <img className={`${className}_img`} src={`/media/goods/${good.name}.png`} alt={good.name} />
      <div className={`${className}_description`}>
        <div>
          <p className={`${className}_name`}>{good.russianName}</p>
          <div className={`${className}_header`}>
            <p className={`${className}_weight ${className}_pieces`}>
              {good.weight} грамм, {plural(pieces, '%d кусочек', '%d кусочка', '%d кусочков')}
            </p>
          </div>
        </div>
        <div className={`${className}_footer`}>
          <p className={`${className}_price`}>{good.price} COM</p>

          <Link to={linkParams}>
            <Button className={className} onClick={setCartItemHandler}>
              Хочу!
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GoodsItem;
