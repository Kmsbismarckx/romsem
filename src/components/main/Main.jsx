import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import Category from '../category/Category';
import './main.css';
import useFilter from '../../hooks/useFilter';
import urlContext from '../../context';

function Main() {
  const { filter } = useContext(urlContext);
  const categories = useSelector((state) => state.categoryReducer.categories);

  const categoriesList = Object.keys(categories).map((category) => categories[category]);
  const sortedAndSearchedCategories = useFilter(categoriesList, filter.sort, filter.query);

  if (!sortedAndSearchedCategories.length) {
    return (
      <ul style={{ display: 'flex', justifyContent: 'center' }} className="main">
        <h1 style={{ textAlign: 'center' }}>Ничего не найдено</h1>
      </ul>
    );
  }
  return (
    <ul className="main">
      {sortedAndSearchedCategories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </ul>
  );
}

export default Main;
