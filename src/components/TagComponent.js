import React from "react";
import styled from "styled-components";

export default function TagComponent({ title, active, value }) {
  const StyledTagComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    flex: 1;
    height: 50px;
    background-color: ${active ? `var(--color-base)` : `var(--color-light)`};
    font-size: var(--font-small);
    color: ${active ? `var(--color-dark)` : `white`};

    &:hover,
    &:active {
      cursor: pointer;
      border: ${active ? `none` : `1px solid var(--color-base);`};
      margin: 0 -1px;
    }
  `;

  return (
    <StyledTagComponent active={active} value={value}>
      {title}
    </StyledTagComponent>
  );
}
