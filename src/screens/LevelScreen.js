import React from "react";
import styled from "styled-components";

import MenuBarComponent from "../components/MenuBarComponent";
import TagComponent from "../components/TagComponent";
import InputComponent from "../components/InputComponent";
import PlayerComponent from "../components/PlayerComponent";

const StyledLevelScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
`;

export default function LevelScreen() {
  return (
    <StyledLevelScreen>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <MenuBarComponent title="Level" />
        <div className="level-screen-tag-container">
          <TagComponent title="Easy" active />
          <TagComponent title="Middle" />
          <TagComponent title="Hard" />
        </div>
      </div>

      <div className="level-screen-players">
        <div className="players-add">
          <PlayerComponent name="Johny" />
          <PlayerComponent name="Sucker" />
          <PlayerComponent name="Duper" />
          <PlayerComponent name="Sex ist the best ever" />
          <PlayerComponent name="Lolek" />
          {/* <p>Add players to the game!</p> */}
        </div>
      </div>

      <InputComponent placeholder="Player name" />
    </StyledLevelScreen>
  );
}
