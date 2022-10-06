import React from "react";
import styled from "styled-components";

import { motion } from "framer-motion";

import MenuBarComponent from "../components/MenuBarComponent";
import PlayerScoreComponent from "../components/PlayerScoreComponent";

const StyledGameOverScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 700px;
  margin: auto;
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
      initial={{ x: "20%", opacity: 0 }}
      animate={{ x: "0", opacity: 1 }}
      style={{ width: "100%", height: "100%" }}
      transition={{
        opacity: { duration: 1 },
        x: { type: "spring", stiffness: 100, ease: "easeInOut" },
      }}
    >
      <StyledGameOverScreen>
        <MenuBarComponent title="Game Over" />
        <div className="game-over-screen-players">
          {players.reverse().map((player, id) => (
            <PlayerScoreComponent
              name={player.name}
              drunk={player.drunk}
              place={id + 1}
              key={player.id}
              id={player.id}
            />
          ))}
        </div>
        <div></div>
      </StyledGameOverScreen>
    </motion.div>
  );
}
