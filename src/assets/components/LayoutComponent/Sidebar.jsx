import { Link } from "react-router-dom";

import homeIcon from "../../images/home.png";
import documentIcon from "../../images/document.png";
import statisticIcon from "../../images/chart-histogram.png";
import tasksIcon from "../../images/list-check.png";

import classes from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <ul className={classes["sidebar-list"]}>
        <li className={classes["sidebar-item"]}>
          <img className={classes.icon} src={homeIcon} alt="Home Icon" />
          <Link to="/">Home</Link>
        </li>
        <li className={classes["sidebar-item"]}>
          <img className={classes.icon} src={tasksIcon} alt="Tasks Icon" />
          <Link to="/board">Tasks</Link>
        </li>
        <li className={classes["sidebar-item"]}>
          <img
            className={classes.icon}
            src={statisticIcon}
            alt="Statistic Icon"
          />
          <Link to="#">Statistics</Link>
        </li>
        <li className={classes["sidebar-item"]}>
          <img
            className={classes.icon}
            src={documentIcon}
            alt="Document Icon"
          />
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
