import Lottie from "react-lottie";
import errorAnimation from "../../animations/error.json";

import classes from "./ErrorComponent.module.css";

function ErrorComponent({ title, message }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: errorAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={classes.error}>
      <div className={classes["animation-container"]}>
        <Lottie
          options={defaultOptions}
          height="100%"
          width="100%"
          isClickToPauseDisabled={true}
        />
      </div>
      <div className={classes["error-description"]}>
        <h1 className={classes["error-title"]}>{title}</h1>
        <p className={classes["error-message"]}>{message}</p>
      </div>
    </div>
  );
}

export default ErrorComponent;
