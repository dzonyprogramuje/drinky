import React, { useState } from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import { useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import StartScreen from "../screens/StartScreen";
import LevelScreen from "../screens/LevelScreen";
import GameScreen from "../screens/GameScreen";
import GameOverScreen from "../screens/GameOverScreen";

const StyledApp = styled.div`
  background-color: var(--color-dark);
  padding: 16px 16px 32px;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  .small-icon {
    fill: white;

    &:hover,
    &:active {
      cursor: pointer;
    }
  }
`;

export default function AnimatedRoutes() {
  const location = useLocation();
  const levelTimes = [60, 180, 360];
  const [level, setLevel] = useState("0");
  const [players, setPlayers] = useState([]);
  const [gameScreen, setGameScreen] = useState(0);
  const tasks = [
    "Pijesz kieliszek",
    "Pijesz lufke",
    "Omijasz kolejke",
    "Pijesz pół",
    "Tym razem Ci się udało",
    "Pijesz pół kielonka",
    "Pijesz pół lufki",
    "Masz szczęście",
    "Pijesz trzy strzały",
    "Pijesz dwie lufy",
    "Farciarz z Ciebie",
    "Pijesz dwa kieliszki",
    "Tym razem nie pijesz",
  ];
  const [score, setScore] = useState([]);

  return (
    <AnimatePresence>
      <StyledApp>
        <Switch key={location.path}>
          <Route path="/" exact>
            <StartScreen />
          </Route>
          <Route path="/level" exact>
            <LevelScreen
              level={level}
              setLevel={setLevel}
              players={players}
              setPlayers={setPlayers}
            />
          </Route>
          <Route path="/game" exact>
            <GameScreen
              screen={gameScreen}
              setScreen={setGameScreen}
              players={players}
              setPlayers={setPlayers}
              tasks={tasks}
              levelTimes={levelTimes}
              level={level}
              score={score}
              setScore={setScore}
            />
          </Route>

          <Route path="/over" exact>
            <GameOverScreen players={score} />
          </Route>
        </Switch>
      </StyledApp>
    </AnimatePresence>
  );
}