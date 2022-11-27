import React, { Children, cloneElement, useEffect, useState } from 'react';
import './Slider.css';
import ArrowButton from '../ArrowButton/ArrowButton';

function Slider({ children, pageWidth, pageHeight, pageMargin }) {
  const PAGE_WIDTH = pageWidth;
  const PAGE_HEIGHT = pageHeight;
  const PAGE_MARGIN = pageMargin;

  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);
  const [pagesLength, setPagesLength] = useState(0);

  useEffect(() => {
    if (pages.length % 2 === 0) {
      setPagesLength(pages.length - 1);
    } else {
      setPagesLength(pages.length - 2);
    }
  }, [pages]);

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH + PAGE_MARGIN;
      return Math.min(newOffset, 0);
    });
  };

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH - PAGE_MARGIN;
      const maxOffset = -(PAGE_WIDTH * pagesLength + PAGE_MARGIN);

      if (newOffset < maxOffset) {
        return 0;
      }

      return Math.max(newOffset, maxOffset);
    });
  };

  useEffect(() => {
    setPages(
      Children.map(children, (child) =>
        cloneElement(child, {
          style: {
            height: `${PAGE_HEIGHT}px`,
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        })
      )
    );
  }, []);

  return (
    <div className="main__container">
      <div className="window">
        <div className="all__pages_container" style={{ transform: `translateX(${offset}px)` }}>
          {pages}
        </div>
        <ArrowButton className="arrow" onClick={handleLeftArrowClick}>
          <img src="media/UI/arrow_button.svg" alt="Влево" />
        </ArrowButton>
        <ArrowButton className="arrow" onClick={handleRightArrowClick}>
          <img src="media/UI/arrow_button.svg" alt="Вправо" />
        </ArrowButton>
      </div>
    </div>
  );
}

export default Slider;
