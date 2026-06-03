import React from "react";
import "./counter.css";
const counter = ({ count_no }) => {
  return (
    <>
      <button className="counter">{count_no + 1} / 5</button>
    </>
  );
};

export default counter;
