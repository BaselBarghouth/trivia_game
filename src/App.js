import React from "react";
import Form from "./pages/form/Form";
import Game from "./pages/game/Game";
import { Route } from "react-router-dom";
import TestContextProvider from "./context/TestContext";
import "./App.css";
function App() {
  return (
    <div className="App">
      <TestContextProvider>
        <Route exact path="/" render={() => <Form />} />
        <Route path="/game" render={() => <Game />} />
      </TestContextProvider>
    </div>
  );
}

export default App;
