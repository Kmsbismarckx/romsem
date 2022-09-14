import React, { useContext } from "react";
import { urlContext } from "../../context";
import "./filter.css";
import Select from "../UI/Select/Select";

const Filter = ({ className, filter, setFilter }) => {
  const { urlPrefix } = useContext(urlContext);
  return (
    <div className={className}>
      <Select
        className={className}
        onChange={(selectedSort) => {
          setFilter({ ...filter, sort: selectedSort });
          console.log(filter);
        }}
        options={[
          { value: "", name: "По умолчанию" },
          { value: "russianName", name: "По названию" },
          { value: "weight", name: "По весу" },
          { value: "quantity", name: "По количеству" },
          { value: "price", name: "По цене" },
        ]}
        value={filter.sort}
      />
    </div>
  );
};

export default Filter;
