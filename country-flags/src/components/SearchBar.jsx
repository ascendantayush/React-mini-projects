import React from "react";
import style from "./SearchBar.module.scss";

const icon = new URL("../assets/search.svg", import.meta.url).href;
const SearchBar = ({ search, searchFunc }) => {
  return (
    <div className={style.searchContainer}>
      <img className={style.searchIcon} src={icon} alt="search-icon" />

      <input
        className={style.searchInput}
        type="search"
        placeholder="Search for a country..."
        onChange={searchFunc}
        value={search}
      />
    </div>
  );
};

export default SearchBar;
