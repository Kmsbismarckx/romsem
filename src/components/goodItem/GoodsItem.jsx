import React, { useContext } from "react";
import Button from "../UI/Button/Button";
import { urlContext } from "../../context";
import "./goodItem.css";
import plural from "plural-ru";
import { Link } from "react-router-dom";

const GoodsItem = ({ className, good, goodsId, params }) => {
  const { urlPrefix } = useContext(urlContext);
  const pieces = good["pieces"] ? good["pieces"] : " ";

  return (
    <div className={className}>
      <img
        className={`${className}_img`}
        src={urlPrefix + `/media/goods/${good.name}.png`}
        alt={good.name}
      />
      <div className={`${className}_description`}>
        <div>
          <p className={`${className}_name`}>{good["russianName"]}</p>
          <div className={`${className}_header`}>
            <p className={`${className}_weight ${className}_pieces`}>
              {good.weight} грамм,{" "}
              {plural(pieces, "%d кусочек", "%d кусочка", "%d кусочков")}
            </p>
          </div>
        </div>
        <div className={`${className}_footer`}>
          <p className={`${className}_price`}>{good["price"]} COM</p>
          <Link to={params}>
            <Button className={className}>Хочу!</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GoodsItem;
