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
  const fullyCircle = 941;
  const INIT_TIME = 2;
  const [time, setTime] = useState(INIT_TIME);
  const [offset, setOffset] = useState(fullyCircle);
  const howMuchPXIsOneSecond = parseFloat(fullyCircle / INIT_TIME);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) {
        setTime((prevState) => prevState - 1);
        setOffset((prevState) => prevState - howMuchPXIsOneSecond);
      } else {
        if (screen + 1 < players.length) {
          setScreen((prevState) => prevState + 1);
          setTime(INIT_TIME);
          setOffset(fullyCircle);
        } else {
          setScreen(0);
          setTime(INIT_TIME);
          setOffset(fullyCircle);
        }
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [time]);

  // TODO: create a helpers to prevent double state update
  // TODO: add remove player when lifes = 0

  const handleClick = (value) => {
    const newPlayers = players;
    if (value) {
      newPlayers[screen].drunk++;
      setPlayers(newPlayers);
    } else {
      newPlayers[screen].lifes--;
      setPlayers(newPlayers);
    }
    if (screen + 1 < players.length) {
      setScreen((prevState) => prevState + 1);
      setTime(INIT_TIME);
      setOffset(fullyCircle);
    } else {
      setScreen(0);
      setTime(INIT_TIME);
      setOffset(fullyCircle);
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
      <TimerComponent time={time} offset={offset} fullyCircle={fullyCircle} />
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
