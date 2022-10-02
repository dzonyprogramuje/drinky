import React from "react";
import styled from "styled-components";

const StyledGameOverScreen = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

export default function GameOverScreen({ players }) {
  return (
    <StyledGameOverScreen>
      {players.map((player) => (
        <p>
          {player.name} - {player.drunk}
        </p>
      ))}
    </StyledGameOverScreen>
  );
}
