import React, { useContext } from "react";
import "./Helpy.css";
import { TestContext } from "../../context/TestContext";
import Button from "../button/Button";
const Helpy = (props) => {
  const { gameControl } = useContext(TestContext);
  // const container = useRef(null);
  // useEffect(() => {
  //   lottie.loadAnimation(
  //     {
  //       container: container.current,
  //       renderer: "svg",
  //       loop: true,
  //       autoplay: true,
  //       path: "https://assets7.lottiefiles.com/packages/lf20_YIRpPt.json",
  //     },
  //     []
  //   );
  // });
  return (
    <div className="container">
      <Button
        // className="animation"
        title="Joker"
        clicked={() => gameControl("toggle_joker")}
        // ref={container}
      />
    </div>
  );
};

export default Helpy;
