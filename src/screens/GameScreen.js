import React from "react";

import "./GameScreen.scss";
import MenuBarComponent from "../components/MenuBarComponent";
import TimerComponent from "../components/TimerComponent";
import MainButtonComponent from "../components/MainButtonComponent";
export default function GameScreen() {
  return (
    <div className="game-screen-container">
      <MenuBarComponent />
      <TimerComponent time="60" />
      <div className="game-screen-buttons">
        <MainButtonComponent>Nie piję</MainButtonComponent>
        <MainButtonComponent fully="">Piję</MainButtonComponent>
      </div>
    </div>
  );
}
