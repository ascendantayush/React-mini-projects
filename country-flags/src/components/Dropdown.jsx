import React from "react";
import style from "./Dropdown.module.scss";

const Dropdown = ({ region, regionFunc }) => {
  return (
    <div className={style.dropdownContainer}>
      <select className={style.dropdown} value={region} onChange={regionFunc}>
        <option className={style.droppedItem} value="">
          Filter by Region
        </option>
        <option className={style.droppedItem} value="africa">
          Africa
        </option>
        <option className={style.droppedItem} value="asia">
          Asia
        </option>
        <option className={style.droppedItem} value="europe">
          Europe
        </option>
        <option className={style.droppedItem} value="america">
          America
        </option>
      </select>
    </div>
  );
};

export default Dropdown;
