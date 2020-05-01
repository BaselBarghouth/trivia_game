import React, { useContext } from "react";
import "./Header.css";
import Timer from "../Timer/Timer";
import { TestContext } from "../../context/TestContext";

const Header = (props) => {
  const { game } = useContext(TestContext);
  return (
    <div className="header">
      <div className="question-number">
        QUESTION {game.questionNumber + 1}/{game.questions.length}
      </div>
      <div className="score">
        POINTS <br />
        {game.score}
      </div>
      <div className="timer">
        <Timer />
      </div>
    </div>
  );
};

export default Header;
