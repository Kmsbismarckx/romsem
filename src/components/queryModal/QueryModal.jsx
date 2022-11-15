import React from 'react';
import './queryModal.css';
import { redirect } from 'react-router-dom';
import Input from '../UI/Input/Input';

function QueryModal({ visible, setVisible, filter, setFilter }) {
  const rootClasses = ['queryModal'];

  if (visible) {
    rootClasses.push('queryModal__active');
  }
  return (
    <div
      className={rootClasses.join(' ')}
      onClick={() => {
        setVisible(false);
      }}
    >
      <div className="queryModal__content" onClick={(event) => event.stopPropagation()}>
        <Input
          className="queryModal__content_search"
          value={filter.query}
          onChange={(e) => setFilter({ ...filter, query: e.target.value })}
          onKeyDown={(e) => {
            if (e.keyCode === 13 || e.keyCode === 27) {
              setVisible(false);
            }
          }}
          placeholder="Поиск..."
        />
      </div>
    </div>
  );
}

export default QueryModal;
