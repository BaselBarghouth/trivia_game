import React from "react";
import { useFetch } from "../controller/useFetch";
import { createUrl } from "../controller/createUrl";
import { QuestionsContext } from "../contexts/QuestionsContext";
const QuestionContainer = (props) => {
  const url = createUrl(props.location.state.test);
  useFetch(url);

  return <div>Questions Container</div>;
};

export default QuestionContainer;
