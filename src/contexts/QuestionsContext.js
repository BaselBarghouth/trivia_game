import React, { useState, createContext } from "react";

export const QuestionsContext = createContext();
const QuestionsContextProvider = (props) => {
  const [game, setGame] = useState({
    questions: [],
    joker: true,
    score: 0,
    questionNumber: 0,
  });
  const setQuestions = (data) => {
    setGame({ ...game, questions: data.results });
  };
  const toogleJoker = () => {};
  const increseScore = () => {};
  const nextQuestion = () => {
    setGame({ ...game, questionNumber: game.questionNumber + 1 });
  };

  return (
    <QuestionsContext.Provider value={{ game, setQuestions, nextQuestion }}>
      {props.children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsContextProvider;
