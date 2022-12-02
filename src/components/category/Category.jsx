import React, { useContext } from 'react';
import './category.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCategoryById } from '../../store/reducers/categoriesSlice';
import appContext from '../../context';

function Category({ id }) {
  const category = useSelector((state) => selectCategoryById(state, id));
  const { isDesktop, isTablet, publicUrl } = useContext(appContext);

  let largeClass;
  let isVisible = '';
  let isBottomLeft = '';

  if (category.isLarge) {
    largeClass = 'category_large';
  } else {
    largeClass = '';
  }

  if (category.isAvailable) {
    isVisible = 'flex';
  }

  if (category.isBottomLeft) {
    isBottomLeft = 'category__name_bottom';
  }

  if (isTablet || isDesktop) {
    return (
      <li className="category">
        <p className="category__name">{category.russianName}</p>

        <p className="category__stock">СКОРО</p>
        <Link className="category__link" to={`/home/${category.id}`}>
          <img
            className="category__img"
            src={
              isTablet
                ? `https://via.placeholder.com/950x397`
                : `${publicUrl}/media/main/${category.name}.png`
            }
            alt={category.russianName}
          />
        </Link>
      </li>
    );
  }

  return (
    <li className={`category ${largeClass}`}>
      <p className={`category__name ${isBottomLeft || ''}`}>{category.russianName}</p>
      <p style={{ display: isVisible }} className="category__stock">
        СКОРО
      </p>
      <Link className="category__link" to={`/home/${category.id}`}>
        <img
          className="category__img"
          src={`${publicUrl}/media/main/${category.name}.png`}
          alt={category.russianName}
        />
      </Link>
    </li>
  );
}

export default Category;
