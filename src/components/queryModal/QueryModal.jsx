import React, { useContext } from 'react';
import './queryModal.css';
import Input from '../UI/Input/Input';
import appContext from '../../context';

function QueryModal() {
  const { modal, setModal, filter, setFilter } = useContext(appContext);
  const rootClasses = ['query-modal'];

  if (modal) {
    rootClasses.push('query-modal_active');
  }
  return (
    <div
      className={rootClasses.join(' ')}
      onClick={() => {
        setModal(false);
      }}
    >
      <div className="query-modal__content" onClick={(event) => event.stopPropagation()}>
        <Input
          className="query-modal__search"
          value={filter.query}
          onChange={(e) => setFilter({ ...filter, query: e.target.value })}
          onKeyDown={(e) => {
            if (e.keyCode === 13 || e.keyCode === 27) {
              setModal(false);
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
