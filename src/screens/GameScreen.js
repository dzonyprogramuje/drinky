import React, { useEffect, useState } from "react";
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
export default function GameScreen({ screen, setScreen, players, setPlayers }) {
  const handleClick = (value) => {
    console.log("clicked");
    if (value) {
      console.log("value true");
      // setPlayers((prevState) => {
      //   prevState[screen].drunk += 1;
      // });
    } else {
      // setPlayers((prevState) => {
      //   prevState[screen].lifes -= 1;
      // });
    }
  };

  return (
    <StyledGameScreen>
      <MenuBarComponent title={players[screen].name} />
      <div className="action-item-container">
        <ActionItemComponent
          text={players[screen].lifes}
          icon={<FaHeart className="icon-base icon-small" />}
        />
        <ActionItemComponent
          text={players[screen].drunk}
          icon={<FaGlassWhiskey className="icon-base icon-small" />}
        />
      </div>
      <TimerComponent screen={screen} setScreen={setScreen} players={players} />
      <p className="game-screen-todo">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="game-screen-buttons">
        <MainButtonComponent onClick={() => handleClick(false)}>
          Nie piję
        </MainButtonComponent>
        <MainButtonComponent fully onClick={() => handleClick(true)}>
          Piję
        </MainButtonComponent>
      </div>
    </StyledGameScreen>
  );
}
