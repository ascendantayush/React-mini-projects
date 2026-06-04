import React, { useEffect, useState } from "react";
import style from "./styles/App.module.scss";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Dropdown from "./components/Dropdown.jsx";
import Card from "./components/Card.jsx";

let key = 0;
const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,population,flags,region,capital",
    )
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className={style["main-container"]}>
      <Header />
      <div className={style["inner-container"]}>
        <SearchBar />
        <Dropdown />
      </div>
      <div className={style["content"]}>
        {
          //  { flag, name, population, region, capital }
          countries.map((data) => {
            return (
              <Card
                key={key++}
                flag={data.flags.svg}
                name={data.name.common}
                population={data.population}
                region={data.region}
                capital={data.capital?.[0]}
              ></Card>
            );
          })
        }
      </div>
    </div>
  );
};

export default App;
