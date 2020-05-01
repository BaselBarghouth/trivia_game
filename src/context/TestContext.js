import React, { useState, createContext } from "react";
import { useHistory } from "react-router-dom";

export const TestContext = createContext();

const TestContextProvider = (props) => {
  let history = useHistory();
  const [test, setTest] = useState({
    numberOfQuestions: "10",
    category: "Any Category",
    difficulty: "Any Difficulty",
    type: "Any Type",
  });

  const [game, setGame] = useState({
    questions: [],
    joker: true,
    score: 0,
    questionNumber: 0,
    done: false,
  });

  const changeTest = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setTest({ ...test, [name]: value });
  };
  const gameControl = (action, input) => {
    switch (action) {
      case "add_questions":
        setGame({ ...game, questions: input, done: true });
        break;
      case "toggle_joker":
        let temp = game.questions;
        if (temp[game.questionNumber].type != "boolean") {
          temp[game.questionNumber].incorrect_answers.splice(0, 2);
          setGame({ ...game, joker: !game.joker, questions: temp });
        }
        break;
      case "score_increment":
        setGame({ ...game, score: game.score + 100 });
        break;
      case "next_question":
        let correctAnswer = game.questions[game.questionNumber].correct_answer;
        if (input == correctAnswer) {
          if (game.questionNumber < test.numberOfQuestions - 1) {
            setGame({
              ...game,
              questionNumber: game.questionNumber + 1,
              score: game.score + 100,
            });
          } else {
            setGame({
              ...game,

              score: game.score + 100,
            });
            history.push("/");
          }
        }

        break;

      default:
        break;
    }
  };
  return (
    <TestContext.Provider value={{ test, changeTest, gameControl, game }}>
      {props.children}
    </TestContext.Provider>
  );
};

export default TestContextProvider;
