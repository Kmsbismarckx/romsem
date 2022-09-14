import React from "react";
import "./queryModal.css";
import Input from "../UI/Input/Input";

const QueryModal = ({ visible, setVisible, filter, setFilter }) => {
  const rootClasses = ["queryModal"];

  if (visible) {
    rootClasses.push("queryModal__active");
  }
  return (
    <div
      className={rootClasses.join(" ")}
      onClick={() => {
        setVisible(false);
      }}
    >
      <div
        className="queryModal__content"
        onClick={(event) => event.stopPropagation()}
      >
        <Input
          className="queryModal__content_search"
          value={filter.query}
          onChange={(e) => setFilter({ ...filter, query: e.target.value })}
          onKeyPress={(e) => {
            if (e.key === "Enter" || e.key === "Escape") {
              setVisible(false);
            }
          }}
          placeholder="Поиск..."
        />
      </div>
    </div>
  );
};

export default QueryModal;
