import React, { useContext } from "react";
import "./Question.css";
import Button from "../../components/button/Button";
import { TestContext } from "../../context/TestContext";
import { shuffleArray } from "../../utilities/shuffleArray";
const Question = (props) => {
  const { game, gameControl } = useContext(TestContext);
  const { questions, questionNumber } = game;
  const singleQuestion = questions[questionNumber];

  const { correct_answer, incorrect_answers, question } = singleQuestion;
  const temp = [...incorrect_answers, correct_answer];
  const answers = shuffleArray(temp);

  return (
    <div className="question-form">
      {correct_answer}
      <div className="question">{question}</div>
      <div className="answers">
        {answers.map((el, index) => (
          <Button
            clicked={() => gameControl("next_question", el)}
            question={true}
            key={index}
            title={el}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
