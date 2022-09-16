import React from "react";
import { useParams } from "react-router-dom";
import "../style/Good.css";
import { useSelector } from "react-redux";
import Button from "../components/UI/Button/Button";
import GoodsItem from "../components/goodItem/GoodsItem";
import SmallProduct from "../components/smallProduct/SmallProduct";
import Slider from "../components/UI/Slider/Slider";

const Good = () => {
  const { goodsId, goodId } = useParams();
  const goods = useSelector((state) => state.goodsReducer.goods);
  let cloneGoodId = +goodId;
  let currentGood = goods[cloneGoodId - 1];

  return (
    <div className="good">
      <div className="good__buttons">
        <Button
          className="good_"
          onClick={() => {
            console.log(cloneGoodId);
            if (cloneGoodId > 1) {
              cloneGoodId -= 1;
            }
          }}
        >
          Назад
        </Button>
        <Button
          className="good_"
          onClick={() => {
            console.log(cloneGoodId);
            if (cloneGoodId <= goods.length) {
              cloneGoodId += 1;
            }
          }}
        >
          Вперед
        </Button>
      </div>
      <div className="good__item">
        <GoodsItem
          className="good__item_main"
          good={currentGood}
          goodsId={goodsId}
          params={""}
        />
        <div className="good__item_composition">
          <p className="good__item_composition_name">Состав сета</p>
          <div className="good__item_composition_items">
            <Slider pageHeight={127} pageWidth={90.02}>
              {currentGood["composition"].map((item) => (
                <SmallProduct
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
    </div>
  );
};

export default Good;
