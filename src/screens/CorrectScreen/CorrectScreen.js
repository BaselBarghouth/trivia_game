import React, { useEffect, useRef, useContext } from "react";
import lottie from "lottie-web";
import "./CorrectScreen.css";
import HeaderScreen from "../../components/HeaderScreen/HeaderScreen";
import Button from "../../components/button/Button";
import { TestContext } from "../../context/TestContext";
const CorrectScreen = () => {
  const { gameControl } = useContext(TestContext);
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://assets3.lottiefiles.com/packages/lf20_Hm1vDH.json",
    });
  });
  return (
    <div>
      <HeaderScreen />
      <div className="container-correct">
        <div className="animation-correct" ref={container}></div>
        <div>
          CORRECT!
          <br />
          <br />
          You have earn 100 points
          <br />
          <br />
        </div>
        <Button
          question={true}
          title="NEXT QUESTION"
          clicked={() => gameControl("next")}
        />
      </div>
    </div>
  );
};

export default CorrectScreen;
