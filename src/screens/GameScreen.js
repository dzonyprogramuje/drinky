import React from "react";
import styled from "styled-components";

import MenuBarComponent from "../components/MenuBarComponent";
import TimerComponent from "../components/TimerComponent";
import MainButtonComponent from "../components/MainButtonComponent";
import ActionItemComponent from "../components/ActionItemComponent";

import { FaHeart } from "react-icons/fa";
import { FaGlassWhiskey } from "react-icons/fa";

const StyledGameScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
  gap: var(--gap-big);

  .action-item-container {
    display: flex;
    gap: 24px;
    justify-content: space-between;
    align-items: center;
  }

  .game-screen-buttons {
    display: flex;
    width: 100%;
    gap: var(--gap-big);
  }

  .game-screen-todo {
    font-size: 1rem;
  }
`;
export default function GameScreen() {
  return (
    <StyledGameScreen>
      <MenuBarComponent title="Johny" />
      <div className="action-item-container">
        <ActionItemComponent
          text="3"
          icon={<FaHeart className="icon-base icon-small" />}
        />
        <ActionItemComponent
          text="10"
          icon={<FaGlassWhiskey className="icon-base icon-small" />}
        />
      </div>
      <TimerComponent time="60" />
      <p className="game-screen-todo">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="game-screen-buttons">
        <MainButtonComponent>Nie piję</MainButtonComponent>
        <MainButtonComponent fully>Piję</MainButtonComponent>
      </div>
    </StyledGameScreen>
  );
}
