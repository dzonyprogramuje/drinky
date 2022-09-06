import React from "react";
import MainButtonComponent from "../components/MainButtonComponent";
import "./StartScreen.scss";
import AlkoholImage from "../images/alkohol.svg";

export default function StartScreen() {
  return (
    <div className="start-screen-container">
      <img
        src={AlkoholImage}
        alt="Drinky - Pijacka Gra Alkoholowa - Start Screen"
        className="alkohol"
      />
      <div className="start-screen-text-container">
        <h1>Drinky</h1>
        <h2>Pijacka gra alkoholowa</h2>

        <MainButtonComponent to="/game">Start</MainButtonComponent>
      </div>
    </div>
  );
}
