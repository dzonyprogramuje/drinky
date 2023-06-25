import React from "react";
import styled from "styled-components";

const StyledActionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: var(--font-base);
`;

export default function ActionItemComponent({ icon, text }) {
  return (
    <StyledActionItem>
      {icon}
      {text}
    </StyledActionItem>
  );
}
