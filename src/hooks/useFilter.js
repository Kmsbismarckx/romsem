import { useMemo } from 'react';

const useSortedItems = (items, sort) => {
  const itemsCopy = [...items];

  if (sort === 'weight' || sort === 'price' || sort === 'pieces') {
    itemsCopy.sort((a, b) => a[sort] - b[sort]);
  }
  if (sort === 'name') {
    itemsCopy.sort((a, b) => a.russianName.localeCompare(b.russianName));
  }

  return itemsCopy;
};

const useFilter = (items, sort, query) => {
  const sortedItems = useSortedItems(items, sort);

  return useMemo(
    () =>
      sortedItems.filter((item) => item.russianName.toLowerCase().includes(query.toLowerCase())),
    [sort, query]
  );
};

export default useFilter;
