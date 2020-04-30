import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { shuffleArray } from "../controller/shuffleArray";
import Timer from "../components/Timer";
const SingleQuestion = (props) => {
  const { question, correct_answer, incorrect_answers, score } = props;
  const temp = [...incorrect_answers, correct_answer];
  const answers = shuffleArray(temp);

  return (
    <div className="form">
      {props.question && (
        <Card style={{ width: "45rem" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Timer {...props} />
            <Button
              onClick={() => props.control("toggle_joker")}
              variant="primary"
            >
              Joker
            </Button>
            <Card.Title>{correct_answer}</Card.Title>
            <Card.Title>{score}</Card.Title>
            <Card.Text> {question}</Card.Text>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {answers.map((el, index) => (
                <Button
                  onClick={(e) => props.control("next_question", el)}
                  style={{ margin: 10 }}
                  key={index}
                  variant="primary"
                >
                  {el}
                </Button>
              ))}
            </div>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default SingleQuestion;
