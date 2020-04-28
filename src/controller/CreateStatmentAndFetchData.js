import constants from "../constants";
export const CreateStatmentAndFetchData = async (test) => {
  let stmt = `https://opentdb.com/api.php?amount=${test.numberOfQuestions}`;
  if (test.category != "Any Category")
    stmt += `&category=${8 + constants.categories.indexOf(test.category)}`;
  if (test.type != "Any Type") {
    if (test.type == "True / False") {
      stmt += `&type=boolean`;
    } else {
      stmt += `&type=${test.type.toLowerCase()}`;
    }
  }

  if (test.difficulty != "Any Difficulty")
    stmt += `&difficulty=${test.difficulty.toLowerCase()}`;

  const request = await fetch(stmt);
  const response = await request.json();
  const questions = response.results;
  return questions;
};
