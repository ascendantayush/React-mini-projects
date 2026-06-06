import React, { useEffect, useState } from "react";
import style from "./CardPage.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const icon = new URL("../assets/back.svg", import.meta.url).href;

function CardPage() {
  const { code } = useParams();

  const navigate = useNavigate();

  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((res) => res.json())
      .then((data) => setCountryData(data[0]));
  }, [code]);

  if (!countryData) {
    return (
      <h1
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        Loading...
      </h1>
    );
  }

  return (
    <div className={style.cardPage}>
      <button className={style.backButton} onClick={() => navigate(-1)}>
        <img src={icon} alt="back" />
        <span>Back</span>
      </button>

      <div className={style.countryContainer}>
        <img
          className={style.countryFlag}
          src={countryData.flags.svg}
          alt={`${countryData.name.common} flag`}
        />

        <div className={style.countryContent}>
          <h2 className={style.countryName}>{countryData.name.common}</h2>

          <div className={style.countryDetails}>
            <div className={style.leftDetails}>
              <span>
                <b>Native Name : </b>
                {Object.values(countryData.name.nativeName || {})[0]?.common}
              </span>

              <span>
                <b>Population : </b>
                {countryData.population.toLocaleString()}
              </span>

              <span>
                <b>Region : </b>
                {countryData.region}
              </span>

              <span>
                <b>Sub Region : </b> {countryData.subregion}
              </span>

              <span>
                <b>Capital : </b>
                {countryData.capital?.[0]}
              </span>
            </div>

            <div className={style.rightDetails}>
              <span>
                <b>Top Level Domain : </b>
                {countryData.tld?.[0]}
              </span>

              <span>
                <b>Currencies : </b>
                {Object.values(countryData.currencies || {})[0]?.name}
              </span>

              <span>
                <b>Languages : </b>
                {Object.values(countryData.languages || {}).join(", ")}
              </span>
            </div>
          </div>

          <div className={style.borderCountries}>
            <h3>Border Countries :</h3>

            <div className={style.borderButtons}>
              {countryData.borders?.map((border) => (
                <Link
                  key={border}
                  to={`/country/${border}`}
                  className={style.cardLink}
                >
                  <button>{border}</button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPage;
