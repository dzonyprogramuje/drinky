import "./App.scss";
import StartScreen from "./screens/StartScreen";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="main-container">
      <Router>
        <Switch>
          <Route path="/" exact>
            <StartScreen />
          </Route>
          {/* <Route path="/game" exact>
            <GameScreen />
          </Route>
          <Route path="/over">
            <OverScreen />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
