import homeIcon from "../../images/home.png";
import documentIcon from "../../images/document.png";
import statisticIcon from "../../images/chart-histogram.png";
import tasksIcon from "../../images/list-check.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <img className="icon" src={homeIcon} alt="Home Icon" />
          <a href="#">Home</a>
        </li>
        <li className="sidebar-item">
          <img className="icon" src={documentIcon} alt="Document Icon" />
          <a href="#">About</a>
        </li>
        <li className="sidebar-item">
          <img className="icon" src={tasksIcon} alt="Tasks Icon" />
          <a href="#">Tasks</a>
        </li>
        <li className="sidebar-item">
          <img className="icon" src={statisticIcon} alt="Statistic Icon" />
          <a href="#">Statistics</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
