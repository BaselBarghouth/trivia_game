import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import constants from "../constants";
import { TestContext } from "../contexts/TestContext";
const FormPicker = (props) => {
  const [test, changeTest] = useContext(TestContext);

  return (
    <Form>
      <Form.Group controlId="formBasicRangeCustom">
        <Form.Label>
          Number of questions
          <br />
          {test.numberOfQuestions}
        </Form.Label>
        <Form.Control
          name="numberOfQuestions"
          type="range"
          custom
          min={10}
          max={50}
          defaultValue={10}
          onChange={(event) => {
            changeTest(event);
          }}
        />
      </Form.Group>
      <Form.Group controlId="formBasicRangeCustom">
        <Form.Label>Category</Form.Label>
        <Form.Control
          onChange={(event) => changeTest(event)}
          name="category"
          as="select"
        >
          {constants.categories.map((el, index) => {
            return <option key={index}>{el}</option>;
          })}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formBasicRangeCustom">
        <Form.Label>Difficulty</Form.Label>
        <Form.Control
          onChange={(event) => changeTest(event)}
          name="difficulty"
          as="select"
        >
          {constants.difficulty.map((el, index) => {
            return <option key={index}>{el}</option>;
          })}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formBasicRangeCustom">
        <Form.Label>Type</Form.Label>
        <Form.Control
          onChange={(event) => changeTest(event)}
          name="type"
          as="select"
        >
          {constants.types.map((el, index) => {
            return <option key={index}>{el}</option>;
          })}
        </Form.Control>
      </Form.Group>
      <Button
        onClick={() =>
          props.history.push({ pathname: "/game", state: { test } })
        }
        variant="outline-primary"
      >
        Start
      </Button>
    </Form>
  );
};

export default FormPicker;
