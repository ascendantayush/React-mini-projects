import React from "react";
import "./button.css";

const Button = ({ image, control }) => {
  return (
    <button className="lower-button" onClick={control}>
      <img src={image} alt="button" />
    </button>
  );
};

export default Button;
