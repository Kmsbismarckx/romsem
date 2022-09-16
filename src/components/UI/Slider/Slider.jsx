import React, { Children, cloneElement, useEffect, useState } from "react";
import "./Slider.css";
import ArrowButton from "../ArrowButton/ArrowButton";

const Slider = ({ children, pageWidth, pageHeight }) => {
  const PAGE_WIDTH = pageWidth;
  const PAGE_HEIGHT = pageHeight;

  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;
      console.log(newOffset);
      return Math.min(newOffset, 0);
    });
  };

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;
      const maxOffset = -(PAGE_WIDTH * (pages.length - 2));
      console.log(maxOffset);
      if (newOffset < maxOffset) {
        return 0;
      }

      return Math.max(newOffset, maxOffset);
    });
  };

  useEffect(() => {
    setPages(
      Children.map(children, (child, index) => {
        return cloneElement(child, {
          style: {
            height: `${PAGE_HEIGHT}px`,
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        });
      })
    );
  }, []);

  return (
    <div className={"main__container"}>
      <div className={"window"}>
        <div
          className={"all__pages_container"}
          style={{ transform: `translateX(${offset}px)` }}
        >
          {pages}
        </div>
        <ArrowButton className="arrow" onClick={handleLeftArrowClick}>
          <img src="/media/UI/arrow_button.svg" alt="Влево" />
        </ArrowButton>
        <ArrowButton className="arrow" onClick={handleRightArrowClick}>
          <img src="/media/UI/arrow_button.svg" alt="Вправо" />
        </ArrowButton>
      </div>
    </div>
  );
};

export default Slider;
