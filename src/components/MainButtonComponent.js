import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

export default function MainButtonComponent({ children, to, fully, onClick }) {
  const StyledMainButton = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    font-size: var(--font-base);
    transition: 0.2s all ease-out;

    background-color: ${fully ? `var(--color-base)` : `none`};
    border: ${fully ? `none` : `2px solid var(--color-base)`};
    color: ${fully ? `var(--color-dark)` : `white`};
    & a {
      display: flex;
      height: 100%;
      width: 100%;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: inherit;
    }

    &:hover,
    &:active {
      cursor: pointer;
      background-color: var(--color-base-hover);
      /* border: none; */
      color: var(--color-dark);
    }
  `;

  return (
    <StyledMainButton>
      <Link
        onClick={onClick}
        to={to}
        style={{
          width: "100%",
        }}
      >
        {children}
      </Link>
    </StyledMainButton>
  );
}
