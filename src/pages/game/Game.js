import React, { useContext, useEffect } from "react";
import Header from "../../components/Header/Header";
import Question from "../../components/question/Question";
import { TestContext } from "../../context/TestContext";
import { createUrl } from "../../utilities/createUrl";
import { shuffleArray } from "../../utilities/shuffleArray";
const Game = (props) => {
  const { test, gameControl, game, done } = useContext(TestContext);
  const url = createUrl(test);
  useEffect(() => {
    fetch(url).then((response) =>
      response
        .json()
        .then((result) => gameControl("add_questions", result.results))
    );
  }, [url]);

  return (
    <div>
      <Header />
      {game.done && <Question />}
    </div>
  );
};

export default Game;
