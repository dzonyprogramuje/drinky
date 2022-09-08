import React from "react";
import styled from "styled-components";
import "../index.scss";

const StyledPlayer = styled.div`
  width: 100%;
  height: 50px;
  background-color: var(--color-base);
`;

export default function PlayerComponent({ name }) {
  return <StyledPlayer>{name}</StyledPlayer>;
}
