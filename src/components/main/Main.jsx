import React, { useContext } from "react";
import { useSelector } from "react-redux";
import Category from "../category/Category";
import "./main.css";
import { useFilter } from "../../hooks/useFilter";
import { urlContext } from "../../context";

const Main = ({ className }) => {
  const { filter } = useContext(urlContext);
  const categories = useSelector((state) => state.foodReducer.categories);
  const sortedAndSearchedCategories = useFilter(
    categories,
    filter.sort,
    filter.query
  );

  if (!sortedAndSearchedCategories.length) {
    return (
      <ul
        style={{ display: "flex", justifyContent: "center" }}
        className={className}
      >
        <h1 style={{ textAlign: "center" }}>Ничего не найдено</h1>
      </ul>
    );
  }
  return (
    <ul className="main">
      {sortedAndSearchedCategories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </ul>
  );
};

export default Main;
