import React from "react";
import MainButtonComponent from "../components/MainButtonComponent";
import "./StartScreen.scss";

export default function StartScreen() {
  return (
    <div className="start-screen-container">
      <h1>Drinky</h1>
      <h2>Pijacka gra alkoholowa</h2>
      <MainButtonComponent>Start</MainButtonComponent>
    </div>
  );
}
