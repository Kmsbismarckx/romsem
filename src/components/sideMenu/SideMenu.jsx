import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectSideMenuCategories } from '../../store/reducers/categoriesSlice';
import './sideMenu.css';
import appContext from '../../context';

function SideMenu() {
  const { categoryId } = useParams();
  const categories = useSelector(selectSideMenuCategories).filter(
    (category) => category.id !== 9 && category.id !== 10 && category.id !== 12
  );
  const { publicUrl } = useContext(appContext);

  return (
    <div className="side-menu">
      <div className="side-menu__logo-container">
        <Link to="/" className="side-menu__logo">
          <img src={`${publicUrl}/media/categories/logo.png`} alt="Romsem" />
        </Link>
        <p className="side-menu__name">ROMSEM</p>
      </div>
      <div className="side-menu__list">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={category.isAvailable ? '/' : `/home/${category.id}`}
            onClick={(e) => {
              if (category.isAvailable) {
                e.preventDefault();
              }
            }}
          >
            <div className={`side-menu__item ${category.isAvailable ? 'side-menu__soon' : ''}`}>
              <div className="side-menu__item-logo">
                <img
                  src={`${publicUrl}/media/categories/${category.img}.svg`}
                  alt={`${category.img}`}
                />
              </div>
              <p className={`${Number(categoryId) === category.id ? 'category_active' : ''}`}>
                {category.russianName}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideMenu;
