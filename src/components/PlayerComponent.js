import React from "react";
import styled from "styled-components";

import { AiOutlineUserDelete as DeleteUser } from "react-icons/ai";

const StyledPlayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  width: 100%;
  height: 50px;
  background-color: var(--color-light);
  border-radius: var(--round-base);

  &:hover,
  &:active {
    /* background-color: var(--color-light-hover); */
    border: 1px solid var(--color-base);
    margin: 0 -1px;
  }
`;

export default function PlayerComponent({ name }) {
  return (
    <StyledPlayer>
      {name}
      <DeleteUser className="icon-base" />
    </StyledPlayer>
  );
}
