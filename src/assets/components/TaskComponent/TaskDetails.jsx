import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import classes from "./TaskDetails.module.css";

function TaskDetails() {
  const { taskId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const task = location.state?.task;

  const handleClose = () => {
    navigate("/board");
  };

  const handleChange = () => {};

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
            <input
              id="title"
              name="title"
              type="text"
              value={task.title}
              className={classes["edit-task"]}
              onChange={handleChange}
            />
          </div>
          <div className={classes["modal-field"]}>
            <label htmlFor="description">Description</label>
            <input
              id="description"
              name="description"
              type="text"
              value={task.description}
              className={classes["edit-task"]}
            />
          </div>
          <div className={classes["modal-field"]}>
            <label htmlFor="assignee">Assignee</label>
            <input
              id="assignee"
              name="assignee"
              type="text"
              value={task.assignee}
              className={classes["edit-task"]}
            />
          </div>
          <div className={classes["modal-field"]}>
            <label htmlFor="priority">Priority</label>
            <div className={classes["select-wrapper"]}>
              <select
                id="priority"
                name="priority"
                value={task.priority}
                className={`${classes["edit-task"]} ${classes["edit-priority"]}`}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div className={classes["modal-field"]}>
              <label htmlFor="dueDate">Due Date</label>
              <input
                id="dueDate"
                name="dueDate"
                type="date"
                value={task.dueDate}
                className={classes["edit-task"]}
              />
            </div>
          </div>
        </form>

        <button className={classes["close-btn"]} onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default TaskDetails;
