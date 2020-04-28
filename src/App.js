import React from "react";
import Home from "./pages/Home";
import Game from "./pages/Game";

import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/game" render={() => <Game />} />
    </div>
  );
}

export default App;
