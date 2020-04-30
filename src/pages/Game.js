import React, { useState, useEffect } from "react";
import Card from "../components/SingleQuestion";
import { createUrl } from "../controller/createUrl";
const Game = (props) => {
  const [game, setGame] = useState({
    questions: [],
    joker: true,
    score: 0,
    questionNumber: 0,
    done: false,
  });
  const url = createUrl(props.location.state.test);
  useEffect(() => {
    fetch(url).then((response) =>
      response
        .json()
        .then((result) =>
          setGame({ ...game, questions: result.results, done: true })
        )
    );
  }, [url]);
  const gameControl = (action, answer) => {
    switch (action) {
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
        if (answer == correctAnswer) {
          setGame({
            ...game,
            questionNumber: game.questionNumber + 1,
            score: game.score + 100,
          });
        }

        break;

      default:
        break;
    }
  };

  return (
    game.done && (
      <Card
        question={game.questions[game.questionNumber].question}
        correct_answer={game.questions[game.questionNumber].correct_answer}
        incorrect_answers={
          game.questions[game.questionNumber].incorrect_answers
        }
        category={game.questions[game.questionNumber].category}
        control={gameControl}
        score={game.score}
        {...props}
      />
    )
  );
};

export default Game;
