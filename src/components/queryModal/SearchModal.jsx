import React, { useContext, useEffect, useRef } from 'react';
import './SearchModal.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from '../UI/Input/Input';
import appContext from '../../context';
import { useFilter } from '../../hooks/useFilter';
import { selectAllGoods } from '../../store/reducers/goodsSlice';
import { selectAllCategories } from '../../store/reducers/categoriesSlice';

function SearchModal() {
  const goods = useSelector(selectAllGoods);
  const categories = useSelector(selectAllCategories);
  const { modal, setModal, filter, setFilter } = useContext(appContext);
  const searchedCategories = [...useFilter(categories, filter.sort, filter.query)].filter(
    (category) => !category.isAvailable
  );
  const modalRef = useRef(null);

  const searchedGoods = [...useFilter(goods, filter.sort, filter.query)];

  const rootClasses = ['search-modal'];

  if (modal) {
    rootClasses.push('search-modal_active');
  }

  useEffect(() => {
    const closeModal = (event) => {
      console.log(event);
      if (event.keyCode === 27) {
        setModal(false);
        setFilter({ ...filter, query: '' });
      }
    };
    document.addEventListener('keydown', (e) => closeModal(e));
    return document.removeEventListener('keydown', (e) => closeModal(e));
  }, [modal]);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (!modalRef.current.contains(e.target)) {
        setModal(false);
      }
    };
    document.addEventListener('mousedown', (e) => onClickOutside(e));
    return document.removeEventListener('mousedown', (e) => onClickOutside(e));
  });

  return (
    <div
      className={rootClasses.join(' ')}
      onClick={() => {
        setModal(false);
      }}
      ref={modalRef}
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
          <h2>Категории</h2>
          {searchedCategories.map((item) => (
            <Link
              to={`/home/${item.id}`}
              className="search-modal__item"
              key={item.id}
              onClick={() => setModal(false)}
            >
              <div className="search-modal__name">{item.russianName}</div>
            </Link>
          ))}
          <h2>Товары</h2>
          {searchedGoods.map((item) => (
            <Link
              to={`/home/${item.category}/${item.id}`}
              className="search-modal__item"
              key={item.id}
              onClick={() => setModal(false)}
            >
              <div className="search-modal__name">{item.russianName}</div>
            </Link>
          ))}
          {searchedCategories.length === 0 && searchedGoods.length === 0 && (
            <div className="search-modal__not-found">Ничего не найдено!</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
