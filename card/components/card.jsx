import React from "react";
import "./card.css";

const Card = ({ image, name, para, show, toggle, bgColor }) => {
  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <img src={image} alt="card-img" onClick={toggle} />

      <h2>{name}</h2>

      {show && <p>{para}</p>}
    </div>
  );
};

export default Card;
