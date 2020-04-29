import { useEffect, useState, useContext } from "react";
import { QuestionsContext } from "../contexts/QuestionsContext";
export const useFetch = (url) => {
  const [game, setQuestions] = useContext(QuestionsContext);
  useEffect(() => {
    fetch(url).then((response) =>
      response.json().then((result) => setQuestions(result.results))
    );
  }, [url, setQuestions]);
};
