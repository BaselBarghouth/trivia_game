import React, { useState, createContext } from "react";

export const TestContext = createContext();
const TestContextProvider = (props) => {
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
    <TestContext.Provider value={[test, changeTest]}>
      {props.children}
    </TestContext.Provider>
  );
};

export default TestContextProvider;
