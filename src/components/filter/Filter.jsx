import React from 'react';
import './filter.css';
import Select from '../UI/Select/Select';

function Filter({ className, filter, setFilter }) {
  return (
    <div className={className}>
      <Select
        className={className}
        onChange={(selectedSort) => {
          setFilter({ ...filter, sort: selectedSort });
        }}
        options={[
          { value: 'default', name: 'По умолчанию' },
          { value: 'name', name: 'По названию' },
          { value: 'weight', name: 'По весу' },
          { value: 'pieces', name: 'По количеству' },
          { value: 'price', name: 'По цене' },
        ]}
        value={filter.sort}
      />
    </div>
  );
}

export default Filter;
