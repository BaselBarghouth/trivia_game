import React, { useEffect, useRef, useContext } from "react";
import lottie from "lottie-web";
import "./WinScreen.css";
import HeaderScreen from "../../components/HeaderScreen/HeaderScreen";
import Button from "../../components/button/Button";
import { TestContext } from "../../context/TestContext";
const InCorrectScreen = () => {
  const { game, gameControl } = useContext(TestContext);
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation(
      {
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "https://assets7.lottiefiles.com/packages/lf20_sYpEFh.json",
      },
    );
  });
  return (
    <div>
      <HeaderScreen />
      <div className="container">
        <div className="animation" ref={container}></div>
        <div>
          YOU WIN!
          <br />
          CONGRATs....
          <br /> Total: {game.score} Points
        </div>
        <Button
          question={true}
          title="Start Again"
          clicked={() => gameControl("wrong_answer")}
        />
      </div>
    </div>
  );
};

export default InCorrectScreen;
