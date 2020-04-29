import React, { useState, createContext } from "react";

export const QuestionsContext = createContext();
const QuestionsContextProvider = (props) => {
  const [game, setGame] = useState({
    questions: [],
    joker: true,
    score: 0,
  });
  const setQuestions = (data) => {
    let temp = game;
    temp["questions"] = data;
    setGame(temp);
  };
  const toogleJoker = () => {};
  const increseScore = () => {};

  return (
    <QuestionsContext.Provider value={[game, setQuestions]}>
      {props.children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsContextProvider;
