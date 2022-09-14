import { useMemo } from "react";

export const useSortedCategories = (categories, sort, type) => {
  const sortedCategories = useMemo(() => {
    let categoriesCopy = [...categories];
    if (sort) {
      if (sort === "weight" || sort === "price" || sort === "quantity") {
        return categoriesCopy.sort((a, b) => a[sort] - b[sort]);
      }
      categoriesCopy.sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return categoriesCopy;
  }, [sort, categories]);
  return sortedCategories;
};

export const useFilter = (ships, sort, query, type) => {
  const sortedCategories = useSortedCategories(ships, sort, type);

  const sortedAndSearchedCategories = useMemo(() => {
    return sortedCategories.filter((category) =>
      category["russianName"].toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedCategories]);

  return sortedAndSearchedCategories;
};
