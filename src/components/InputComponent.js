import React, { useRef } from "react";
import styled from "styled-components";
import uniqid from "uniqid";

import { AiOutlineUserAdd as AddUser } from "react-icons/ai";

const StyledInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--color-base);
  border-radius: 12px;
  height: 52px;
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
export default function InputComponent({ placeholder, setPlayers }) {
  const nameInput = useRef(null);

  const addUser = (e) => {
    const { value } = nameInput.current;

    const newUser = {};
    newUser.id = uniqid();
    newUser.name = value;
    newUser.lifes = 5;
    newUser.drunk = 0;

    if ((e.type === "keydown" && e.key === "Enter") || e.type === "click") {
      setPlayers((prevState) => [...prevState, newUser]);
      nameInput.current.value = "";
    }
  };

  return (
    <StyledInput>
      <input
        type="text"
        placeholder={placeholder}
        ref={nameInput}
        onKeyDown={addUser}
      />
      <AddUser className="icon-base" onClick={addUser} />
    </StyledInput>
  );
}
