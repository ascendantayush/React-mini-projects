import React from "react";
import style from "./Header.module.scss";
import { Link } from "react-router-dom";
const icon = new URL("../assets/moon-solid-full.svg", import.meta.url).href;

const Header = () => {
  return (
    <div className={style.header}>
      <Link to={`/`} className={style.LinkHeader}>
        <h2 className={style.headerTitle}>Where in the world?</h2>
      </Link>
      <button className={style.headerBtn}>
        <img className={style.headerIcon} src={icon} alt="icon" />
        <span className={style.headerText}>Dark Mode</span>
      </button>
    </div>
  );
};

export default Header;
