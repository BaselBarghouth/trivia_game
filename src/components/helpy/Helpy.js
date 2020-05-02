import React, { useEffect, useRef, useContext } from "react";
import lottie from "lottie-web";
import "./Helpy.css";
import { TestContext } from "../../context/TestContext";
const Helpy = (props) => {
  const { gameControl } = useContext(TestContext);
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation(
      {
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "https://assets7.lottiefiles.com/packages/lf20_YIRpPt.json",
      },
      []
    );
  });
  return (
    <div className="container">
      <div
        className="animation"
        onClick={() => gameControl("toggle_joker")}
        ref={container}
      ></div>
    </div>
  );
};

export default Helpy;
