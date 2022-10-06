import React from "react";
import styled from "styled-components";

import { motion } from "framer-motion";

import MainButtonComponent from "../components/MainButtonComponent";
import AlkoholImage from "../images/alkohol.svg";

const StyledStartScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  max-width: 700px;
  margin: auto;

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
    margin: 0 auto 0 10%;
    width: 65%;
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
    <motion.div
      initial={{ x: "20%", opacity: 0 }}
      animate={{ x: "0", opacity: 1 }}
      style={{ width: "100%", height: "100%" }}
      transition={{
        opacity: { duration: 1 },
        x: { type: "spring", stiffness: 100, ease: "easeInOut" },
      }}
    >
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
