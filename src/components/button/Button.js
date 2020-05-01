import React from "react";
import "./Button.css";
const Button = (props) => {
  return (
    <button className={props.question ? "btn2" : "btn"} onClick={props.clicked}>
      {props.title}
    </button>
  );
};

export default Button;
