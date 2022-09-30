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

    &:hover {
      cursor: pointer;
      border: 1px solid var(--color-base);
    }
  `;

  return (
    <StyledTagComponent active={active} value={value}>
      {title}
    </StyledTagComponent>
  );
}
