import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectSideMenuCategories } from '../../store/reducers/categoriesSlice';
import './sideMenu.css';
import appContext from '../../context';

function SideMenu() {
  const categories = useSelector(selectSideMenuCategories);
  const { publicUrl } = useContext(appContext);

  return (
    <div className="side-menu__container">
      <div className="side-menu">
        <div className="side-menu__logo-container">
          <Link to="/" className="side-menu__logo">
            <img src={`${publicUrl}/media/categories/logo.png`} alt="Romsem" />
          </Link>
          <p className="side-menu__name">ROMSEM</p>
        </div>

        <hr className="side-menu__hr" />
        <div className="side-menu__list">
          {categories.map((category) => (
            <Link key={category.id} to={`/home/${category.id}`}>
              <div className={`side-menu__item ${category.isAvailable ? 'side-menu__soon' : ''}`}>
                <div className="side-menu__item-logo">
                  <img
                    src={`${publicUrl}/media/categories/${category.name}.svg`}
                    alt={`${category.name}`}
                  />
                </div>
                <p>{category.russianName}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
