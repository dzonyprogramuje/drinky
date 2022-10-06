import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { IoMdArrowRoundBack as BackIcon } from "react-icons/io";

import { AiFillHome as HomeIcon } from "react-icons/ai";

const StyledMenuBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export default function MenuBarComponent({ title }) {
  const linkToBack = title === "Poziom" ? "/" : "/level";

  return (
    <StyledMenuBar>
      <Link to={linkToBack}>
        <BackIcon className="icon-base icon-big" />
      </Link>
      <h2>{title}</h2>
      <Link to="">
        <HomeIcon className="icon-base icon-big" />
      </Link>
    </StyledMenuBar>
  );
}
