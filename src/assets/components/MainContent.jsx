import Lottie from "react-lottie";
import teamAnimation from "../animations/team.json";
import infoIcon from "../images/check.png";
import starIcon from "../images/star.png";
import arrowIcon from "../images/arrow-right.png";
import { Link } from "react-router-dom";

import classes from "./MainContent.module.css";

function MainContent() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: teamAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <main className={classes.content}>
      <div className={classes["main-header"]}>
        <h1 className={classes["main-title"]}>
          Welcome to{" "}
          <span className={classes["highlight-text"]}>
            NextGen Productivity
          </span>
        </h1>
        <p className={classes["what-you-can-do"]}>
          Empower your workflow with cutting-edge tools and a sleek design made
          for today’s innovators.
        </p>
      </div>
      <div className={classes["features-list"]}>
        <ul className={classes.features}>
          <li className={classes.feature}>
            <img src={infoIcon} alt="Info Icon" />
            <span>
              Smooth drag-and-drop task management at your fingertips.
            </span>
          </li>
          <li className={classes.feature}>
            <img src={infoIcon} alt="Info Icon" />
            <span>Real-time collaboration that keeps your team in sync.</span>
          </li>
          <li className={classes.feature}>
            <img src={infoIcon} alt="Info Icon" />
            <span>Customizable workflows tailored to your unique style.</span>
          </li>
          <li className={classes.feature}>
            <img src={infoIcon} alt="Info Icon" />
            <span>Instant insights and analytics to boost your strategy.</span>
          </li>
        </ul>
        <div className={classes["animation-container"]}>
          <Lottie options={defaultOptions} height="100%" width="100%" />
        </div>
      </div>
      <div className={classes["get-started"]}>
        <img src={starIcon} alt="Star Icon" />
        <p>Dive in now and elevate your productivity to new heights!</p>
      </div>
      <Link to="/board" className={classes["create-board-btn"]}>
        Get Started{" "}
        <img className={classes.icon} src={arrowIcon} alt="Arrow Icon" />
      </Link>
      <div className={classes["footer-wave"]}></div>
    </main>
  );
}

export default MainContent;
