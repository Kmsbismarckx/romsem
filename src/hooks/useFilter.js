import { useMemo } from 'react';

export const useSortedItems = (items, sort) => {
  const itemsCopy = [...items];
  switch (sort) {
    case 'weight':
      itemsCopy.sort((a, b) => a.weight * a.pieces - b.weight * b.pieces);
      break;
    case 'price':
      itemsCopy.sort((a, b) => a.price * a.pieces - b.price * b.pieces);
      break;
    case 'pieces':
      itemsCopy.sort((a, b) => a[sort] - b[sort]);
      break;
    case 'name':
      itemsCopy.sort((a, b) => a.russianName.localeCompare(b.russianName));
      break;
    default:
      return itemsCopy;
  }
  return itemsCopy;
};

export const useFilter = (items, sort, query) => {
  const sortedItems = items;

  return useMemo(
    () =>
      sortedItems.filter((item) => item.russianName.toLowerCase().includes(query.toLowerCase())),
    [sort, query]
  );
};
