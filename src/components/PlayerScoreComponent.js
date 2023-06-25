import React from "react";
import styled from "styled-components";

import { MdSportsScore as PlaceIcon } from "react-icons/md";
import {
  FaGlassWhiskey as DrunkIcon,
  FaUserInjured as ChampionIcon,
} from "react-icons/fa";

const StyledPlayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  width: 100%;
  height: 50px;
  background-color: var(--color-light);
  border-radius: var(--round-base);

  animation: animation-slide-up, animation-opacity,
    animation-scale 0.2s ease-in-out;

  &:hover,
  &:active {
    cursor: pointer;
    border: 1px solid var(--color-base);
    margin: 0 -1px;
  }

  .summary-tags {
    display: flex;
    gap: 16px;
  }

  .summary-tag {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }
`;

export default function PlayerScoreComponent({ name, id, drunk, place }) {
  return (
    <StyledPlayer name={name} id={id} key={id}>
      <div className="summary-tag">
        <ChampionIcon className="icon-base icon-small" />
        {name}
      </div>
      <div className="summary-tags">
        <div className="summary-tag">
          <DrunkIcon className="icon-base icon-small" />
          {drunk}
        </div>
        <div className="summary-tag">
          <PlaceIcon className="icon-base" />
          {place}
        </div>
      </div>
    </StyledPlayer>
  );
}
