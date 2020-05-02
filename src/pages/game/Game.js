import React, { useContext, useEffect } from "react";
import Header from "../../components/Header/Header";
import Question from "../../components/question/Question";
import { TestContext } from "../../context/TestContext";
import { createUrl } from "../../utilities/createUrl";
import CorrectScreen from "../../screens/CorrectScreen/CorrectScreen";
import InCorrectScreen from "../../screens/incorrectscreen/IncorrectScreen";
const Game = (props) => {
  const { test, gameControl, game, done } = useContext(TestContext);
  useEffect(() => {
    console.log("oops");
    const url = createUrl(test);
    fetch(url).then((response) =>
      response
        .json()
        .then((result) => gameControl("add_questions", result.results))
    );
  }, []);
  return (
    <div>
      {game.isAnswered ? (
        game.isCorrect ? (
          <CorrectScreen />
        ) : (
          <InCorrectScreen />
        )
      ) : (
        <div>
          <Header />
          {game.done && <Question />}
        </div>
      )}
    </div>
  );
};

export default Game;
