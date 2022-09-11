import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

export default function MainButtonComponent({ children, to, fully }) {
  const StyledMainButton = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    font-size: var(--font-base);

    background-color: ${fully ? `var(--color-base)` : `none`};
    border: ${fully ? `none` : `2px solid var(--color-base)`};

    & a {
      text-decoration: none;
      color: ${fully ? `var(--color-dark)` : `white`};
    }

    &:hover,
    &:active {
      cursor: pointer;
      background-color: var(--color-base-hover);
      border: none;
    }
  `;

  return (
    <StyledMainButton>
      <Link
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
