import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCategoryById } from '../../store/reducers/categoriesSlice';
import appContext from '../../context';

function Category({ id }) {
  const category = useSelector((state) => selectCategoryById(state, id));
  const { isDesktop, isTablet } = useContext(appContext);

  let imgWidth;
  let imgHeight;
  let largeClass;
  let isVisible = '';

  if (category.isLarge) {
    imgWidth = '330px';
    imgHeight = '146.67px';
    largeClass = 'main__item_large';
  } else {
    imgWidth = '162px';
    imgHeight = '157px';
    largeClass = '';
  }

  if (category.isAvailable) {
    isVisible = 'flex';
  }

  if (isTablet || isDesktop) {
    return (
      <li className="main__item">
        <p className="main__item__name">{category.russianName}</p>

        <p className="main__item_stock">СКОРО</p>
        <Link to={`/home/${category.id}`}>
          {isTablet ? (
            <img
              className="main__item-img"
              src="https://via.placeholder.com/950x397"
              alt={category.russianName}
            />
          ) : (
            <img
              className="main__item-img"
              src={`/media/main/${category.name}.png`}
              alt={category.russianName}
            />
          )}
        </Link>
      </li>
    );
  }

  return (
    <li style={{ width: imgWidth, height: imgHeight }} className={`main__item ${largeClass}`}>
      {category.isBottomLeft ? (
        <p
          style={{
            bottom: '7.67px',
            left: '7px',
            fontSize: '24px',
            lineHeight: '29.78px',
          }}
          className="main__item__name"
        >
          {category.russianName}
        </p>
      ) : (
        <p style={{ top: '10px', left: '11px' }} className="main__item__name">
          {category.russianName}
        </p>
      )}
      <p style={{ display: isVisible }} className="main__item_stock">
        СКОРО
      </p>
      <Link to={`/home/${category.id}`}>
        <img
          className="main__item__img"
          src={`/media/main/${category.name}.png`}
          alt={category.russianName}
        />
      </Link>
    </li>
  );
}

export default Category;
