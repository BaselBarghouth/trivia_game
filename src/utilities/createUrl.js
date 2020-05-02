import constants from "./constants";
export const createUrl = (test) => {
  let url = `https://opentdb.com/api.php?amount=${test.numberOfQuestions}`;
  if (test.category !== "Any Category")
    url += `&category=${8 + constants.categories.indexOf(test.category)}`;
  if (test.type !== "Any Type") {
    if (test.type === "True / False") {
      url += `&type=boolean`;
    } else {
      url += `&type=${test.type.toLowerCase()}`;
    }
  }

  if (test.difficulty !== "Any Difficulty")
    url += `&difficulty=${test.difficulty.toLowerCase()}`;
  return url;
};
