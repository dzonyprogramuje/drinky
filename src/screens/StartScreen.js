import React from "react";
import styled from "styled-components";

import { motion } from "framer-motion";

import MainButtonComponent from "../components/MainButtonComponent";
import AlkoholImage from "../images/alkohol.svg";

const StyledStartScreen = styled.div`
  h1 {
    color: var(--color-white);
    font-size: var(--font-huge);
  }

  h2 {
    color: var(--color-light-second);
    font-size: var(--font-base);
    font-weight: 300;
  }

  // TODO: adjust image that it works dynamic RWD
  img.alkohol {
    width: 65%;
    margin-left: -10%;
  }

  .start-screen-text-container {
    margin: 10% 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--gap-big);
  }
`;
export default function StartScreen() {
  return (
    <motion.div initial={{ x: "100%" }} animate={{ x: "0" }}>
      <StyledStartScreen>
        <img
          src={AlkoholImage}
          alt="Drinky - Pijacka Gra Alkoholowa - Start Screen"
          className="alkohol"
        />
        <div className="start-screen-text-container">
          <h1>Drinky</h1>
          <h2>Pijacka gra alkoholowa</h2>

          <MainButtonComponent fully to="/level">
            Start
          </MainButtonComponent>
        </div>
      </StyledStartScreen>
    </motion.div>
  );
}
