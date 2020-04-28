import React from "react";
import Home from "./pages/Home";
import Game from "./pages/Game";
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Route exact path="/" render={(props) => <Home {...props} />} />
      <Route exact path="/game" render={(props) => <Game {...props} />} />
    </div>
  );
}

export default App;
