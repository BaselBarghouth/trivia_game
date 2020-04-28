import React from "react";
import Form from "../components/Form";
import TestKindContextProvider from "../contexts/TestKindContext";
const Home = (props) => {
  return (
    <div className="form">
      <TestKindContextProvider>
        <Form />
      </TestKindContextProvider>
    </div>
  );
};

export default Home;
