import boardExample from "../images/board.jpeg";
import infoIcon from "../images/check.png";
import starIcon from "../images/star.png";
import arrowIcon from "../images/arrow-right.png";
import { Link } from "react-router-dom";

import classes from "./MainContent.module.css";

function MainContent() {
  return (
    <main className={classes.content}>
      <div className={classes["main-header"]}>
        <h1 className={classes["main-title"]}>
          Welcome to your{" "}
          <span className={classes["highlight-text"]}>productivity hub!</span>
        </h1>

        <p className={classes["what-you-can-do"]}>
          Organize your tasks, track progress, and boost productivity—all in one
          place.
        </p>
      </div>
      <div className={classes["features-list"]}>
        <ul className={classes.features}>
          <li className={classes.feature}>
            <img src={infoIcon} alt="Info Icon" />
            <span>Drag and drop tasks effortlessly.</span>
          </li>
          <li className={classes.feature}>
            <img src={infoIcon} alt="Info Icon" />
            <span>Collaborate in real time with your team.</span>
          </li>
          <li className={classes.feature}>
            <img src={infoIcon} alt="Info Icon" />
            <span>Customize your workflow to fit your needs.</span>
          </li>
        </ul>
        <img
          className={classes["board-img"]}
          src={boardExample}
          alt="Board Example"
        />
      </div>
      <div className={classes["get-started"]}>
        <img src={starIcon} alt="Arrow Icon" />
        <p>Get started now and take control of your projects!</p>
      </div>
      <Link to="/board" className={classes["create-board-btn"]}>
        Create Board <img className={classes.icon} src={arrowIcon} />
      </Link>
      <div className={classes["footer-wave"]}></div>
    </main>
  );
}

export default MainContent;
