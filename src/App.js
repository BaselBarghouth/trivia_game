import React, { useEffect, useContext } from "react";
import Form from "./pages/form/Form";
import Game from "./pages/game/Game";
import { Route } from "react-router-dom";
import TestContextProvider from "./context/TestContext";
import IncorrectScreen from "./screens/incorrectscreen/IncorrectScreen";
import CorrectScreen from "./screens/CorrectScreen/CorrectScreen";
import { createUrl } from "./utilities/createUrl";
import TestContext from "./context/TestContext";
import "./App.css";
import Popup from "./components/popup/Popup";
function App() {
  return (
    <div className="App">
      <TestContextProvider>
        <Route exact path="/" render={(props) => <Form {...props} />} />
        <Route path="/game" render={(props) => <Game {...props} />} />
        <Route path="/correct-screen" render={() => <CorrectScreen />} />{" "}
        <Route path="/incorrect-screen" render={() => <IncorrectScreen />} />
      </TestContextProvider>
      {/* <Popup /> */}
    </div>
  );
}

export default App;
