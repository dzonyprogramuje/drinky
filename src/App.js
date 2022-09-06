import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import StartScreen from "./screens/StartScreen";
import LevelScreen from "./screens/LevelScreen";
import GameScreen from "./screens/GameScreen";

function App() {
  return (
    <div className="main-container">
      <Router>
        <Switch>
          <Route path="/" exact>
            <StartScreen />
          </Route>
          <Route path="/level" exact>
            <LevelScreen />
          </Route>
          <Route path="/game" exact>
            <GameScreen />
          </Route>
          {/* <Route path="/over">
            <OverScreen />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
