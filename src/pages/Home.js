import React from "react";
import Form from "../components/Form";
import TestContextProvider from "../contexts/TestContext";
const Home = (props) => {
  return (
    <div className="form">
      <TestContextProvider>
        <Form {...props} />
      </TestContextProvider>
    </div>
  );
};

export default Home;
