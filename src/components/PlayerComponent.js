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

  /* animation: append-animate 0.3s linear; */

  /* @keyframes append-animate {
    from {
      transform: scale(0);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  } */

  -webkit-animation: scale-up-center 0.3s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: scale-up-center 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @-webkit-keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.1);
      transform: scale(0.1);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.1);
      transform: scale(0.1);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  &:hover,
  &:active {
    border: 1px solid var(--color-base);
    margin: 0 -1px;
  }
`;

export default function PlayerComponent({ name, id }) {
  return (
    <StyledPlayer name={name} id={id} key={id}>
      {name}
      <DeleteUser className="icon-base" />
    </StyledPlayer>
  );
}
