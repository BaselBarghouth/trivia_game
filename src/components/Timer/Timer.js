import React, { useState, useEffect } from "react";
const Timer = (props) => {
  const [seconds, setSeconds] = useState(15);
  const [intervalId, setIntervalId] = useState(null);
  //   useEffect(() => {
  //     const id = window.setInterval(() => {
  //       setSeconds((seconds) => seconds - 1);
  //     }, 1000);
  //   });
  return <div>{seconds}</div>;
};

export default Timer;
