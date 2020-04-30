import { CountdownCircleTimer } from "react-countdown-circle-timer";
import React from "react";
const UrgeWithPleasureComponent = (props) => (
  <CountdownCircleTimer
    size={100}
    isPlaying
    duration={15}
    colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
    onComplete={() => {
      // props.history.push("/");
      return [false];
    }}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
);
export default UrgeWithPleasureComponent;
