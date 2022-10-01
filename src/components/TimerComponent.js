import React, { useState, useEffect } from "react";
import styled from "styled-components";

// convert time to string to show
const showTimeAsString = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  let minutesToShow = minutes < 10 ? "0" + minutes : minutes;
  let secondsToShow = time % 60 < 10 ? "0" + seconds : seconds;

  return `${minutesToShow}:${secondsToShow}`;
};

export default function TimerComponent({ time, offset, fullyCircle }) {
  // const circle = Math.PI * 150;

  const StyledTimerContainer = styled.div`
    position: relative;
    width: 320px;
    height: 320px;

    // TODO: without overflow hidden does not work hover on buttons  :O Why?
    overflow: hidden;

    .circle-container {
      rotate: -90deg;
      position: relative;
    }

    circle {
      position: absolute;
      top: 0;
      left: 0;
    }

    .inner {
      stroke: var(--color-base);
      stroke-width: 10px;
      stroke-dasharray: ${fullyCircle};
      stroke-dashoffset: ${offset};
      z-index: 1;
    }

    .outer {
      stroke: var(--color-light);
      stroke-width: 10px;
      stroke-dasharray: 950;
      stroke-dashoffset: 0;
      z-index: -100;
    }

    circle {
      fill: none;
      /* animation: all 5s linear; */
    }

    p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: var(--font-big);
    }
  `;

  return (
    <StyledTimerContainer>
      <div className="circle-container">
        <svg height="320" width="320">
          <circle
            className="outer"
            cx="160"
            cy="160"
            r="150"
            stroke-linecap="round"
          />
          <circle
            className="inner"
            cx="160"
            cy="160"
            r="150"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <p>{showTimeAsString(time)}</p>
    </StyledTimerContainer>
  );
}
