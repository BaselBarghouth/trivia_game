import React, { useContext } from "react";
import { useFetch } from "../controller/useFetch";
import { createUrl } from "../controller/createUrl";
import { QuestionsContext } from "../contexts/QuestionsContext";
import SingleQuestion from "./SingleQuestion";
import { shuffleArray } from "../controller/shuffleArray";

const QuestionContainer = (props) => {
  //const { correct_answer, incorrect_answers } = question;
  return (
    <div>
      {/* {game.questions && (
        <SingleQuestion quiz={game.questions[game.questionNumber]} />
      )} */}
    </div>
  );
};

export default QuestionContainer;
