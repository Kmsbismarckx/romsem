import React, { useContext } from "react";
import { urlContext } from "../../context";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { urlPrefix } = useContext(urlContext);

  let imgWidth,
    imgHeight,
    largeClass,
    isVisible = "";

  if (category["isLarge"]) {
    imgWidth = "330px";
    imgHeight = "146.67px";
    largeClass = "main__item_large";
  } else {
    imgWidth = "162px";
    imgHeight = "157px";
    largeClass = "";
  }

  if (category["isAvailable"]) {
    isVisible = "flex";
  }

  return (
    <li
      style={{ width: imgWidth, height: imgHeight }}
      className={"main__item" + " " + largeClass}
    >
      {category["isBottomLeft"] ? (
        <p
          style={{
            bottom: "7.67px",
            left: "7px",
            fontSize: "24px",
            lineHeight: "29.78px",
          }}
          className="main__item_name"
        >
          {category["russianName"]}
        </p>
      ) : (
        <p style={{ top: "10px", left: "11px" }} className="main__item_name">
          {category["russianName"]}
        </p>
      )}
      <p style={{ display: isVisible }} className="main__item_stock">
        СКОРО
      </p>
      <Link to={`/home/${category.id}`}>
        <img
          className="main__item_img"
          src={urlPrefix + `/media/main/${category.name}.png`}
          alt={category["russianName"]}
        />
      </Link>
    </li>
  );
};

export default Category;
