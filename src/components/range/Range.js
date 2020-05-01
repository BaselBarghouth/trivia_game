import React from "react";
import "./Range.css";
const Range = (props) => {
  return (
    <input
      type="range"
      min={props.min}
      max={props.max}
      defaultValue={props.min}
      className="slider"
      id="myRange"
      onChange={(e) => props.change(e)}
      name={props.name}
    />
  );
};

export default Range;
