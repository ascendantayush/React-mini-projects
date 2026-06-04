import React from "react";
import style from "./Card.module.scss";

const Card = () => {
  return (
    <>
      <div className={style.cardContainer}>
        <img
          className={style.cardImage}
          src="https://flagcdn.com/ai.svg"
          alt="country-flag"
        />

        <div className={style.information}>
          <h2 className={style.countryName}>Afghanistan</h2>

          <div className={style.countryStats}>
            <p className={style.countryDetail}>
              <b>Population:</b> 40218234 people
            </p>

            <p className={style.countryDetail}>
              <b>Region:</b> Asia
            </p>

            <p className={style.countryDetail}>
              <b>Capital:</b> Kabul
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
