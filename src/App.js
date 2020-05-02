import React from "react";
import Form from "./pages/form/Form";
import Game from "./pages/game/Game";
import { Route } from "react-router-dom";
import TestContextProvider from "./context/TestContext";
import IncorrectScreen from "./screens/incorrectscreen/IncorrectScreen";
import CorrectScreen from "./screens/CorrectScreen/CorrectScreen";
import "./App.css";
function App() {
  return (
    <div className="App">
      <TestContextProvider>
        <Route exact path="/" render={(props) => <Form {...props} />} />
        <Route path="/game" render={(props) => <Game {...props} />} />
        <Route path="/correct-screen" render={() => <CorrectScreen />} />{" "}
        <Route path="/incorrect-screen" render={() => <IncorrectScreen />} />
      </TestContextProvider>
    </div>
  );
}

export default App;
