import React, { useEffect, useRef, useContext } from "react";
import lottie from "lottie-web";
import "./IncorrectScreen.css";
import HeaderScreen from "../../components/HeaderScreen/HeaderScreen";
import Button from "../../components/button/Button";
import { TestContext } from "../../context/TestContext";
import { useHistory } from "react-router-dom";
const InCorrectScreen = (props) => {
  const { game } = useContext(TestContext);
  const container = useRef(null);
  const history = useHistory();
  useEffect(() => {
    lottie.loadAnimation(
      {
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "https://assets4.lottiefiles.com/packages/lf20_C7fkiN.json",
      },
      []
    );
  });
  return (
    <div>
      <HeaderScreen />
      <div className="container">
        <div className="animation" ref={container}></div>
        <div>
          WRONG!
          <br />
          ..
          <div className="rr">(</div>
          <br /> Total: {game.score} Points
        </div>
        <Button
          question={true}
          title="Start Again"
          clicked={() => history.push("/")}
        />
      </div>
    </div>
  );
};

export default InCorrectScreen;
