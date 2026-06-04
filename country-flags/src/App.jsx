import React from "react";
import style from "./styles/App.module.scss";
import Header from "./components/Header";
const App = () => {
  return (
    <div className={style["main-container"]}>
      <Header></Header>
    </div>
  );
};

export default App;
