import React from "react";

import "./LevelScreen.scss";
import AddIcon from "../images/add-icon.png";

import MenuBarComponent from "../components/MenuBarComponent";
import TagComponent from "../components/TagComponent";
import InputComponent from "../components/InputComponent";

export default function LevelScreen() {
  return (
    <div className="game-screen-container">
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
          <TagComponent title="Easy" active="" />
          <TagComponent title="Middle" />
          <TagComponent title="Hard" />
        </div>
      </div>

      <div className="level-screen-players">
        <p>Add players to the game!</p>
      </div>

      <InputComponent placeholder="Player name" icon={AddIcon} />
    </div>
  );
}
