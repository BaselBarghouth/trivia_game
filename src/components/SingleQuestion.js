import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { QuestionsContext } from "../contexts/QuestionsContext";
const SingleQuestion = (props) => {
  const { game, nextQuestion } = useContext(QuestionsContext);
  console.log(props.quiz);
  return (
    <div className="form">
      {props.quiz && (
        <Card style={{ width: "45rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Text>{props.quiz.question}</Card.Text>
            <Button onClick={() => nextQuestion()} variant="primary">
              Go somewhere
            </Button>
            <Button variant="primary">Go somewhere</Button>
            <Button variant="primary">Go somewhere</Button>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default SingleQuestion;
