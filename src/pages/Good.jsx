import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../style/Good.css";
import "../components/smallProduct/smallProduct.css";
import { useSelector } from "react-redux";
import Button from "../components/UI/Button/Button";
import GoodsItem from "../components/goodItem/GoodsItem";
import SmallProduct from "../components/smallProduct/SmallProduct";
import Slider from "../components/UI/Slider/Slider";
import About from "../components/about/About";
import { usePages } from "../hooks/usePages";

const Good = () => {
  const { goodsId, goodId } = useParams();
  const goods = useSelector((state) => state.goodsReducer.goods);
  let cloneGoodId = +goodId;
  let currentGood = goods[cloneGoodId - 1];

  const [currentPage, setCurrentPage] = useState(+goodId);
  const [leftButton, setLeftButton] = useState({
    isDisabled: false,
    pointerEvent: "",
  });
  const [rightButton, setRightButton] = useState({
    isDisabled: false,
    pointerEvent: "",
  });

  const [goodInfo, setGoodInfo] = useState({
    name: currentGood.name,
    russianName: currentGood.russianName,
    price: currentGood.price,
  });
  usePages({
    currentPage,
    itemLength: goods.length,
    rightButton,
    setRightButton,
    leftButton,
    setLeftButton,
  });

  return (
    <div className="good">
      <div className="good__buttons">
        <Button
          className="good_"
          disabled={leftButton.isDisabled}
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
        >
          <Link
            className="button__link"
            style={{
              width: "100%",
              zIndex: 2,
              pointerEvents: leftButton.pointerEvent,
            }}
            to={`/home/13/${currentPage - 1}`}
          >
            Назад
          </Link>
        </Button>
        <Button
          className="good_"
          disabled={rightButton.isDisabled}
          onClick={() => {
            setCurrentPage(currentPage + 1);
            console.log(currentPage);
          }}
        >
          <Link
            className="button__link"
            style={{
              width: "100%",
              zIndex: 2,
              pointerEvents: rightButton.pointerEvent,
            }}
            to={`/home/13/${currentPage + 1}`}
          >
            Вперед
          </Link>
        </Button>
      </div>
      <div className="good__item">
        <GoodsItem
          className="good__item_main"
          good={currentGood}
          goodsId={goodsId}
          params={""}
          onClick={() => {
            let basket = JSON.parse(localStorage.getItem("basket")) || [];
            basket.push(goodInfo);
            localStorage.setItem("basket", JSON.stringify(basket));
          }}
        />
        <div className="good__item_composition">
          <p className="good__item_composition_name">Состав сета</p>
          <div className="good__item_composition_items">
            <Slider pageHeight={127} pageWidth={90.02} pageMargin={10}>
              {currentGood["composition"].map((item, index) => (
                <SmallProduct
                  key={index}
                  className="good__item_composition_item"
                  name={item["russianName"]}
                  price={item.price}
                  imgURL={"/media/good/philadelphia_circle.png"}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="good__addition">
        <p className="good__addition_name">Рекомендуем к этому товару</p>
        <div className="good__addition_items">
          <Slider pageHeight={121} pageWidth={107} pageMargin={15}>
            {currentGood["composition"].map((item, index) => (
              <SmallProduct
                key={index}
                className="good__addition_item"
                name={item["russianName"]}
                price={item.price}
                imgURL={"/media/good/philadelphia_circle.png"}
              >
                {
                  <img
                    className="good__addition_item_button"
                    src="/media/good/add_button.svg"
                    alt="Добавить"
                  />
                }
              </SmallProduct>
            ))}
          </Slider>
        </div>
      </div>
      <About className="about" />
    </div>
  );
};

export default Good;
