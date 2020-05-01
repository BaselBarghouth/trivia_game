import React from "react";
import "./Select.css";
const Select = (props) => {
  return (
    <select
      className="select"
      name={props.name}
      onChange={(e) => props.change(e)}
    >
      {props.options.map((el, index) => (
        <option
          style={{ textAlign: "left", backgroundColor: "white" }}
          key={index}
        >
          {el}
        </option>
      ))}
    </select>
  );
};

export default Select;
