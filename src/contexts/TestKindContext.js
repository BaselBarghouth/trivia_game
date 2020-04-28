import React, { useState, createContext } from "react";

export const TestKindContext = createContext();

const TestKindContextProvider = (props) => {
  const [test, setTest] = useState({
    numberOfQuestions: "10",
    category: "Any Category",
    difficulty: "Any Difficulty",
    type: "Any Type",
  });
  const changeTest = (event) => {
    let temp = test;
    temp[event.target.name] = event.target.value;
    setTest(temp);
  };
  return (
    <TestKindContext.Provider value={{ test, changeTest }}>
      {props.children}
    </TestKindContext.Provider>
  );
};
export default TestKindContextProvider;
