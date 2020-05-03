import React, { useState, useEffect, useContext } from "react";
import { TestContext } from "../../context/TestContext";
import "./Timer.css";
const Timer = () => {
  const [seconds, setSeconds] = useState(15);
  const { gameControl, game } = useContext(TestContext);
  useEffect(() => {
    if (seconds > 0) {
      const id = window.setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
      return () => {
        window.clearInterval(id);
      };
    } else {
      gameControl("time_out");
    }
  });

  return <div className="timer1">{seconds}</div>;
};

export default Timer;
