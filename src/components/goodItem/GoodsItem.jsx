import React, { useContext } from 'react';
import plural from 'plural-ru';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../UI/Button/Button';
import './goodItem.css';
import { selectGoodById } from '../../store/reducers/goodsSlice';
import { setCartItem } from '../../store/reducers/cartSlice';
import appContext from '../../context';

function GoodsItem({ className, id, linkParams }) {
  const good = useSelector((state) => selectGoodById(state, id));
  const { isDesktop } = useContext(appContext);

  const dispatch = useDispatch();
  const pieces = good.pieces ? good.pieces : ' ';

  const setCartItemHandler = linkParams ? null : () => dispatch(setCartItem({ id }));

  return (
    <div className={className}>
      <img
        className={`${className}__img`}
        src="http://via.placeholder.com/250x203.svg"
        alt={good.name}
      />
      <div className={`${className}__description`}>
        <div>
          <p className={`${className}__name`}>{good.russianName}</p>
          <div className={`${className}__header`}>
            <p className={`${className}_weight ${className}_pieces`}>
              {good.weight} грамм, {plural(pieces, '%d кусочек', '%d кусочка', '%d кусочков')}
            </p>
          </div>
        </div>
        {isDesktop && <hr className="goods__item__hr" />}
        <div className={`${className}__footer`}>
          <p className={`${className}__price`}>{good.price} COM</p>
          {/* {isDesktop ? ( */}
          {/*   <Button className={`${className}_`} onClick={setCartItemHandler}> */}
          {/*     Хочу! */}
          {/*   </Button> */}
          {/* ) : ( */}
          <Link to={linkParams}>
            <Button className={`${className}_`} onClick={setCartItemHandler}>
              Хочу!
            </Button>
          </Link>
          {/* )} */}
        </div>
      </div>
    </div>
  );
}

export default GoodsItem;
