import React, { useContext } from "react";
import "./HeaderScreen.css";
import { TestContext } from "../../context/TestContext";

const Header = () => {
  const { game } = useContext(TestContext);
  return (
    <div className="header-screen">
      <div className="question-number-screen">
        QUESTION {game.questionNumber + 1}/{game.questions.length}
      </div>
    </div>
  );
};

export default Header;
