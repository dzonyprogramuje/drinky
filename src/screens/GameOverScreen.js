import React from "react";
import styled from "styled-components";

import { motion } from "framer-motion";

import MenuBarComponent from "../components/MenuBarComponent";
import PlayerComponent from "../components/PlayerComponent";

const StyledGameOverScreen = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

const StyledGameScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
  gap: var(--gap-big);

  .game-over-screen-players {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }
`;

export default function GameOverScreen({ players }) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0" }}
      style={{ width: "100%", height: "100%" }}
    >
      <StyledGameScreen>
        <MenuBarComponent title="Game Over" />
        <div className="game-over-screen-players">
          {players.map((player) => (
            <PlayerComponent
              name={player.name}
              key={player.id}
              id={player.id}
            />
          ))}
        </div>
        <div></div>
      </StyledGameScreen>
    </motion.div>
  );
}
