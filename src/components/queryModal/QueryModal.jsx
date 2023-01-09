import React, { useContext, useEffect } from 'react';
import './queryModal.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from '../UI/Input/Input';
import appContext from '../../context';
import useFilter from '../../hooks/useFilter';
import { selectAllGoods } from '../../store/reducers/goodsSlice';
import { selectAllCategories } from '../../store/reducers/categoriesSlice';

function QueryModal() {
  const goods = useSelector(selectAllGoods);
  const categories = useSelector(selectAllCategories);
  const { modal, setModal, filter, setFilter, publicUrl } = useContext(appContext);
  const sortedAndSearchedData = [
    ...useFilter(goods, filter.sort, filter.query),
    ...useFilter(categories, filter.sort, filter.query),
  ];

  const rootClasses = ['search-modal'];

  if (modal) {
    rootClasses.push('search-modal_active');
  }

  const closeModal = (event) => {
    if (event.keyCode === 27) {
      setModal(false);
      setFilter({ ...filter, query: '' });
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', (e) => closeModal(e));
    return window.removeEventListener('keydown', (e) => closeModal(e));
  }, []);
  return (
    <div
      className={rootClasses.join(' ')}
      onClick={() => {
        setModal(false);
      }}
    >
      <div className="search-modal__content" onClick={(event) => event.stopPropagation()}>
        <Input
          className="search-modal__input"
          value={filter.query}
          onChange={(e) => setFilter({ ...filter, query: e.target.value })}
          onKeyDown={(e) => {
            if (e.keyCode === 27) {
              setModal(false);
              setFilter({ ...filter, query: '' });
            }
          }}
          placeholder="Поиск..."
        />
        <div className="search-modal__result">
          {sortedAndSearchedData.map((item) => (
            <Link
              to={
                categories
                  .filter((category) => category.isAvailable === false)
                  .map((availableCategory) => availableCategory.name)
                  .includes(item.name)
                  ? `/home/${item.id}`
                  : `/${item.id}`
              }
              className="search-modal__item"
              key={item.name + item.id}
              onClick={() => setModal(false)}
            >
              <img
                className="search-modal__img"
                src={`${publicUrl}/media/searchData/${item.name}.png`}
                alt=""
              />
              <div className="search-modal__name">{item.russianName}</div>
            </Link>
          ))}
          {sortedAndSearchedData.length === 0 && (
            <div className="search-modal__not-found">Ничего не найдено!</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default QueryModal;
