import React from "react";
import Button from "./components/button";
import Card from "./components/card";
import "./app.css";
import { useState } from "react";
import Counter from "./components/counter";
const previous = new URL("./assets/left.svg", import.meta.url);
const forward = new URL("./assets/right.svg", import.meta.url);
const card_img = new URL("./assets/card-image.jpg", import.meta.url);
const quotes = [
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Do not watch the clock. Do what it does. Keep going.",
  "In the middle of every difficulty lies opportunity.",
  "Great things are done by a series of small things brought together.",
];

const colors = ["#F5F5F0", "#E6D8C3", "#C2A68C", "#5D866C", "#3b5545"];

const App = () => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  const next = () => {
    setIndex((prev) => prev + 1);
  };

  const prev = () => {
    setIndex((prev) => prev - 1);
  };

  const toggle = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="main">
      <Counter count_no={index} />
      <Card
        show={show}
        toggle={toggle}
        image={card_img}
        name={`Quote no ${index + 1}`}
        para={quotes[index]}
        bgColor={colors[index]}
      />

      <div className="button-container">
        {index > 0 && <Button image={previous} control={prev} />}
        {index < quotes.length - 1 && <Button image={forward} control={next} />}
      </div>
    </div>
  );
};

export default App;
