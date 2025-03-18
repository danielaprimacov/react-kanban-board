import boardExample from "../images/board.jpeg";
import infoIcon from "../images/check.png";
import starIcon from "../images/star.png";
import arrowIcon from "../images/arrow-right.png";

function MainContent() {
  return (
    <main className="content">
      <div className="main-header">
        <h1 className="main-title">Welcome to your productivity hub!</h1>

        <p className="what-you-can-do">
          Organize your tasks, track progress, and boost productivity—all in one
          place.
        </p>
      </div>
      <div className="features-list">
        <ul className="features">
          <li className="feature">
            <img src={infoIcon} alt="Info Icon" />
            <span>Drag and drop tasks effortlessly.</span>
          </li>
          <li className="feature">
            <img src={infoIcon} alt="Info Icon" />
            <span>Collaborate in real time with your team.</span>
          </li>
          <li className="feature">
            <img src={infoIcon} alt="Info Icon" />
            <span>Customize your workflow to fit your needs.</span>
          </li>
        </ul>
        <img className="board-img" src={boardExample} alt="Board Example" />
      </div>
      <div className="get-started">
        <img src={starIcon} alt="Arrow Icon" />
        <p>Get started now and take control of your projects!</p>
      </div>
      <div className="create-board-btn">
        Create Board <img className="icon" src={arrowIcon} />
      </div>
    </main>
  );
}

export default MainContent;
