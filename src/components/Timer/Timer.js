import React, { useState, useEffect, useContext } from "react";
import { TestContext } from "../../context/TestContext";
const Timer = () => {
  const [seconds, setSeconds] = useState(3);
  const { gameControl } = useContext(TestContext);
  useEffect(() => {
    if (seconds > 0) {
      const id = window.setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
      return () => window.clearInterval(id);
    }
  });
  if (seconds === 0) {
    gameControl("time_out");
  }
  return <div>{seconds}</div>;
};

export default Timer;
