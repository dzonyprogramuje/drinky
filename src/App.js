import { useState } from "react";
import styled from "styled-components";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import StartScreen from "./screens/StartScreen";
import LevelScreen from "./screens/LevelScreen";
import GameScreen from "./screens/GameScreen";

const StyledApp = styled.div`
  background-color: var(--color-dark);
  padding: 16px 16px 32px;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  .small-icon {
    fill: white;

    &:hover,
    &:active {
      cursor: pointer;
    }
  }
`;

function App() {
  const [level, setLevel] = useState(1);

  return (
    <StyledApp>
      <Router>
        <Switch>
          <Route path="/" exact>
            <StartScreen />
          </Route>
          <Route path="/level" exact>
            <LevelScreen level={level} setLevel={setLevel} />
          </Route>
          <Route path="/game" exact>
            <GameScreen />
          </Route>
          {/* <Route path="/over">
            <OverScreen />
          </Route> */}
        </Switch>
      </Router>
    </StyledApp>
  );
}

export default App;
