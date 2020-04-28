import React from "react";
import { CreateStatmentAndFetchData } from "../controller/CreateStatmentAndFetchData";
const Game = (props) => {
  console.log(CreateStatmentAndFetchData(props.location.state.test), "sdfsf");
  return <div>Game</div>;
};

export default Game;
