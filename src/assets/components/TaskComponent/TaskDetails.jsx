import { useParams, useNavigate } from "react-router-dom";
import classes from "./TaskDetails.module.css";

function TaskDetails({ taskId }) {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/board");
  };

  return (
    <div className={classes["modal-overlay"]} onClick={handleClose}>
      <div
        className={classes["modal-content"]}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={classes.title}>Task Details</h2>
        
        <form>
          <div className={classes["modal-field"]}>
            <label htmlFor="title">Title</label>
            <input id="title" name="title" type="text" className={classes["edit-task"]}/>
          </div>
        </form>

        <button className={classes["close-btn"]} onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}

export default TaskDetails;
