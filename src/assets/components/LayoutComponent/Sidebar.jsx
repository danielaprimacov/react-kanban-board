import homeIcon from "../../images/home.png";
import documentIcon from "../../images/document.png";
import statisticIcon from "../../images/chart-histogram.png";
import tasksIcon from "../../images/list-check.png";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <img className="icon" src={homeIcon} alt="Home Icon" />
          <Link to="/">Home</Link>
        </li>
        <li className="sidebar-item">
          <img className="icon" src={documentIcon} alt="Document Icon" />
          <Link to="#">About</Link>
        </li>
        <li className="sidebar-item">
          <img className="icon" src={tasksIcon} alt="Tasks Icon" />
          <Link to="/board">Tasks</Link>
        </li>
        <li className="sidebar-item">
          <img className="icon" src={statisticIcon} alt="Statistic Icon" />
          <Link to="#">Statistics</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
