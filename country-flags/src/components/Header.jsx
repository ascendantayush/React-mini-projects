import React from "react";
import style from "./Header.module.scss";

const icon = new URL("../assets/moon-solid-full.svg", import.meta.url).href;

const Header = () => {
  return (
    <div className={style.header}>
      <h2 className={style.headerTitle}>Where in the world?</h2>
      <button className={style.headerBtn}>
        <img className={style.headerIcon} src={icon} alt="icon" />
        <span className={style.headerText}>Dark Mode</span>
      </button>
    </div>
  );
};

export default Header;
