import { TestContext } from "../contexts/TestContext";
import React, { useContext } from "react";
const CorrectAnser = (props) => {
  const [test, changeTest] = useContext(TestContext);
  return <div>{test.type}</div>;
};

export default CorrectAnser;
