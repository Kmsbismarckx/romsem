import { useMemo } from 'react';

const useSortedCategories = (categories, sort) =>
  useMemo(() => {
    const categoriesCopy = categories;
    if (sort) {
      if (sort === 'weight' || sort === 'price' || sort === 'quantity') {
        return categoriesCopy.sort((a, b) => a[sort] - b[sort]);
      }
      categoriesCopy.sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return categoriesCopy;
  }, [sort, categories]);

const useFilter = (categories, sort, query) => {
  const sortedCategories = useSortedCategories(categories, sort);

  return useMemo(
    () =>
      sortedCategories.filter((category) =>
        category.russianName.toLowerCase().includes(query.toLowerCase())
      ),
    [query, sortedCategories]
  );
};

export default useFilter;
