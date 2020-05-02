import React, { useContext } from "react";
import Button from "../../components/button/Button";
import Range from "../../components/range/Range";
import Select from "../../components/select/Select";
import constants from "../../utilities/constants";
import { TestContext } from "../../context/TestContext";
import { useHistory } from "react-router-dom";

import "./Form.css";
const Form = (props) => {
  const { test, changeTest } = useContext(TestContext);
  let history = useHistory();
  return (
    <div className="form">
      <label className="item">
        Number Of Questions
        <br /> <br />
        {test.numberOfQuestions}
        <Range name="numberOfQuestions" change={changeTest} min={10} max={50} />
      </label>
      <label className="item extra">
        Category
        <Select
          change={changeTest}
          name="category"
          options={constants.categories}
        />
      </label>
      <label className="item">
        Difficulty
        <Select
          change={changeTest}
          name="difficulty"
          options={constants.difficulty}
        />
      </label>
      <label className="item">
        Type
        <Select change={changeTest} name="type" options={constants.types} />
      </label>

      <Button title="START" clicked={() => history.push("/game")} />
    </div>
  );
};

export default Form;
