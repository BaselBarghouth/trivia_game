import React, { useEffect, useContext } from "react";
import QuestionsContextProvider from "../contexts/QuestionsContext";
import QuestionsContainer from "../components/QuestionsConainer";
import Header from "../components/Header";
const Game = (props) => {
  return (
    <QuestionsContextProvider>
      <Header />
      <QuestionsContainer {...props} />
    </QuestionsContextProvider>
  );
};

export default Game;
