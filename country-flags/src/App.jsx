import React from "react";
import style from "./styles/App.module.scss";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
const App = () => {
  return (
    <div className={style["main-container"]}>
      <Header></Header>
      <SearchBar></SearchBar>
    </div>
  );
};

export default App;
