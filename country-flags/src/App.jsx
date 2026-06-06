import React, { useEffect, useState } from "react";
import style from "./styles/App.module.scss";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

let key = 0;
const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
