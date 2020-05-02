import React, { useContext } from "react";
import "./HeaderScreen.css";
import { TestContext } from "../../context/TestContext";

const Header = (props) => {
  const { game } = useContext(TestContext);
  return (
    <div className="header">
      <div className="question-number">
        QUESTION {game.questionNumber + 1}/{game.questions.length}
      </div>
    </div>
  );
};

export default Header;
