import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

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
    font-size: 1.09rem;
    font-weight: 500;
    background-color: var(--color-light);
    width: 100%;
    height: 50px;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default function GameScreen({
  screen,
  setScreen,
  players,
  setPlayers,
  tasks,
  levelTimes,
  level,
  setScore,
}) {
  const history = useHistory();

  setPlayers(players);

  const randomTask = () => {
    const randomNumber = Math.floor(Math.random() * (tasks.length - 0) + 0);
    const randomTask = tasks[randomNumber];

    return randomTask;
  };

  const fullyCircle = 941;
  const INIT_TIME = levelTimes[level];
  const [time, setTime] = useState(INIT_TIME);
  const [offset, setOffset] = useState(fullyCircle);
  const [task, setTask] = useState(randomTask());
  const howMuchPXIsOneSecond = parseFloat(fullyCircle / INIT_TIME);

  // handle Time and set new offset for circle
  const handleTick = () => {
    setTime((prevState) => prevState - 1);
    setOffset((prevState) => prevState - howMuchPXIsOneSecond);
  };

  const updatePlayer = (hasDrunk) => {
    // why does it work and this not [...players] ?
    const newPlayers = players;

    if (hasDrunk) {
      newPlayers[screen].drunk++;
    } else {
      newPlayers[screen].lifes--;
    }

    // delete player from array if it is over
    if (newPlayers[screen].lifes === 0) {
      setScore((prevState) => [...prevState, newPlayers[screen]]);

      newPlayers.splice(screen, 1);
    }

    setPlayers(newPlayers);
    isGameOver();
  };

  // after click or timeout we want to update screen
  const updateScreen = () => {
    setTime(INIT_TIME);
    setOffset(fullyCircle);
    setTask(randomTask());
    if (screen + 1 < players.length) {
      setScreen((prevState) => prevState + 1);
    } else {
      setScreen(0);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) {
        handleTick();
      } else {
        updatePlayer(false);
        updateScreen();
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [time, handleTick, updatePlayer, updateScreen]);

  const handleClick = (hasDrunk) => {
    updatePlayer(hasDrunk);
    updateScreen();
  };

  const isGameOver = () => {
    if (players.length <= 0) {
      history.push("/over");
    }
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0" }}
      style={{ width: "100%", height: "100%" }}
    >
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
        <p className="game-screen-todo">{task}</p>
        <div className="game-screen-buttons">
          <MainButtonComponent onClick={() => handleClick(false)}>
            Nie piję
          </MainButtonComponent>
          <MainButtonComponent fully onClick={() => handleClick(true)}>
            Piję
          </MainButtonComponent>
        </div>
      </StyledGameScreen>
    </motion.div>
  );
}
