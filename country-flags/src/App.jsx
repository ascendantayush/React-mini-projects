import React from "react";
import style from "./styles/App.module.scss";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Dropdown from "./components/Dropdown.jsx";
const App = () => {
  return (
    <div className={style["main-container"]}>
      <Header></Header>
      <div className={style["inner-container"]}>
        <SearchBar></SearchBar>
        <Dropdown></Dropdown>
      </div>
    </div>
  );
};

export default App;
