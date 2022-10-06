import React from "react";
import styled from "styled-components";

import { motion } from "framer-motion";

import MenuBarComponent from "../components/MenuBarComponent";
import TagComponent from "../components/TagComponent";
import InputComponent from "../components/InputComponent";
import PlayerComponent from "../components/PlayerComponent";
import MainButtonComponent from "../components/MainButtonComponent";

const StyledLevelScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 700px;
  margin: auto;
  height: 100%;
  color: white;

  .level-screen-tag-container {
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }

  .level-screen-players {
    display: flex;
    width: 100%;

    .players-add {
      display: flex;
      flex-direction: column;
      gap: var(--gap-big);
      align-items: center;
      justify-content: center;
      width: 100%;

      color: var(--color-light-second);

      &:hover {
        cursor: pointer;
      }
    }
    p {
      color: var(color-light-second);
    }
  }

  .level-screen-bottom-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: var(--gap-big);
  }
`;

export default function LevelScreen({
  level,
  setLevel,
  players,
  setPlayers,
  setScore,
}) {
  const handleDelete = (e) => {
    // we have to prevent fire a setPlayers without name.value, when a div is clicked
    if (e.target.attributes.name.value) {
      setPlayers((prevState) =>
        prevState.filter(
          (player) => player.name !== e.target.attributes.name.value
        )
      );
    }
  };
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
      <StyledLevelScreen>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <MenuBarComponent title="Poziom" />
          <div
            className="level-screen-tag-container"
            onClick={(e) => setLevel(e.target.attributes.value.value)}
          >
            <TagComponent
              title="Łatwy"
              value={0}
              active={level === "0" ? true : false}
            />
            <TagComponent
              title="Średni"
              value={1}
              active={level === "1" ? true : false}
            />
            <TagComponent
              title="Trudny"
              value={2}
              active={level === "2" ? true : false}
            />
          </div>
        </div>

        <div className="level-screen-players">
          <div className="players-add" onClick={handleDelete}>
            {players.length <= 0 ? (
              <p>Dodaj graczy!</p>
            ) : (
              players.map((player) => (
                // TODO: how to do this with for example custom attribute e.g. "ass"
                <PlayerComponent
                  name={player.name}
                  key={player.id}
                  id={player.id}
                />
              ))
            )}
          </div>
        </div>
        <div className="level-screen-bottom-container">
          {players.length > 1 ? (
            <MainButtonComponent fully to="/game" onClick={() => setScore([])}>
              Play!
            </MainButtonComponent>
          ) : null}
          <InputComponent placeholder="Nick gracza" setPlayers={setPlayers} />
        </div>
      </StyledLevelScreen>
    </motion.div>
  );
}
