import React from "react";

import "./GameScreen.scss";
import MenuBarComponent from "../components/MenuBarComponent";
import TimerComponent from "../components/TimerComponent";

export default function GameScreen() {
  return (
    <div className="game-screen-container">
      <MenuBarComponent />
      <TimerComponent time="60" />
      Buttons
    </div>
  );
}
