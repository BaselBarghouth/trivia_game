import React, { useContext } from "react";
import { useFetch } from "../controller/useFetch";
import { createUrl } from "../controller/createUrl";
import { QuestionsContext } from "../contexts/QuestionsContext";
import SingleQuestion from "./SingleQuestion";
const QuestionContainer = (props) => {
  const url = createUrl(props.location.state.test);
  useFetch(url);
  const { game } = useContext(QuestionsContext);
  return (
    <div>
      {game.questions && (
        <SingleQuestion quiz={game.questions[game.questionNumber]} />
      )}
    </div>
  );
};

export default QuestionContainer;
