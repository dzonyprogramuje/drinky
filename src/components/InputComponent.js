import React from "react";
import styled from "styled-components";

import { AiOutlineUserAdd as AddUser } from "react-icons/ai";

const StyledInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--color-base);
  border-radius: 12px;
  height: 50px;
  width: 100%;
  padding: 0 1rem;
  font-size: var(--font-small);
  color: white;
  gap: var(--gap-standard);

  &:focus-within {
    border: 2px solid var(--color-base);
  }

  input {
    background: none;
    outline: none;
    border: none;
    height: 100%;
    width: 100%;
    color: white;
  }

  input::placeholder {
    color: var(--color-light-second);
  }
`;
export default function InputComponent({ placeholder }) {
  return (
    <StyledInput>
      <input type="text" placeholder={placeholder} />
      <AddUser className="icon-base" />
    </StyledInput>
  );
}
