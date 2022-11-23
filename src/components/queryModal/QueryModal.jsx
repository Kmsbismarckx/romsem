import React from 'react';
import './queryModal.css';
import Input from '../UI/Input/Input';

function QueryModal({ visible, setVisible, filter, setFilter }) {
  const rootClasses = ['query-modal'];

  if (visible) {
    rootClasses.push('query-modal_active');
  }
  return (
    <div
      className={rootClasses.join(' ')}
      onClick={() => {
        setVisible(false);
      }}
    >
      <div className="query-modal__content" onClick={(event) => event.stopPropagation()}>
        <Input
          className="query-modal__search"
          value={filter.query}
          onChange={(e) => setFilter({ ...filter, query: e.target.value })}
          onKeyDown={(e) => {
            if (e.keyCode === 13 || e.keyCode === 27) {
              setVisible(false);
              setFilter({ ...filter, query: '' });
            }
          }}
          placeholder="Поиск..."
        />
      </div>
    </div>
  );
}

export default QueryModal;
