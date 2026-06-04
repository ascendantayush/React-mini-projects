import React from "react";
import style from "./Card.module.scss";

const Card = ({ flag, name, population, region, capital }) => {
  return (
    <>
      <div className={style.cardContainer}>
        <img className={style.cardImage} src={flag} alt="country-flag" />

        <div className={style.information}>
          <h2 className={style.countryName}>{name}</h2>

          <div className={style.countryStats}>
            <p className={style.countryDetail}>
              <b>Population:</b>
              {population} people
            </p>

            <p className={style.countryDetail}>
              <b>Region:</b>
              {region}
            </p>

            <p className={style.countryDetail}>
              <b>Capital:</b> {capital}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
