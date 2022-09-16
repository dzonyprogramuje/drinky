import React from "react";
import styled from "styled-components";

import MenuBarComponent from "../components/MenuBarComponent";
import TimerComponent from "../components/TimerComponent";
import MainButtonComponent from "../components/MainButtonComponent";

const StyledGameScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
  gap: var(--gap-big);

  .game-screen-buttons {
    display: flex;
    width: 100%;
    gap: var(--gap-big);
  }
`;
export default function GameScreen() {
  return (
    <StyledGameScreen>
      <MenuBarComponent title="Johny" />
      <TimerComponent time="60" />
      <div className="game-screen-buttons">
        <MainButtonComponent>Nie piję</MainButtonComponent>
        <MainButtonComponent fully>Piję</MainButtonComponent>
      </div>
    </StyledGameScreen>
  );
}
