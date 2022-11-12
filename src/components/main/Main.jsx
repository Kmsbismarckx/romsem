import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import Category from '../category/Category';
import './main.css';
import useFilter from '../../hooks/useFilter';
import { selectAllCategories } from '../../store/reducers/categoriesSlice';
import appContext from '../../context';
import Header from '../Header/Header';

function Main() {
  const { filter, isDesktop } = useContext(appContext);
  const categories = useSelector(selectAllCategories);
  const sortedAndSearchedCategories = useFilter(categories, filter.sort, filter.query);

  if (isDesktop) {
    return (
      <div className="main">
        <Header />
      </div>
    );
  }

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
        <Category key={category.id} id={category.id} />
      ))}
    </ul>
  );
}

export default Main;
