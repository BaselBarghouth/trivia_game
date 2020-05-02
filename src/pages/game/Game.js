import React, { useContext, useEffect } from "react";
import Header from "../../components/Header/Header";
import Question from "../../components/question/Question";
import { TestContext } from "../../context/TestContext";
import { createUrl } from "../../utilities/createUrl";
import CorrectScreen from "../../screens/CorrectScreen/CorrectScreen";
import InCorrectScreen from "../../screens/incorrectscreen/IncorrectScreen";
import WinScreen from "../../screens/winscreen/WinScreen";
import TimeOutScreen from "../../screens/timeoutscreen/TimeOutScreen";
const Game = () => {
  const { test, gameControl, game } = useContext(TestContext);
  useEffect(() => {
    const url = createUrl(test);
    fetch(url).then((response) =>
      response
        .json()
        .then((result) => gameControl("add_questions", result.results))
    );
  }, []);
  return (
    <div>
      {!game.time_out ? (
        game.isAnswered ? (
          game.isWon ? (
            <WinScreen />
          ) : game.isCorrect ? (
            <CorrectScreen />
          ) : (
            <InCorrectScreen />
          )
        ) : (
          <div>
            <Header />
            {game.done && <Question />}
          </div>
        )
      ) : (
        <TimeOutScreen />
      )}
    </div>
  );
};

export default Game;
