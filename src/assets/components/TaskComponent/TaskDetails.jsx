import { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import KanbanContext from "../KanbanContext";
import classes from "./TaskDetails.module.css";

function TaskDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { updateTask } = useContext(KanbanContext);

  // Get the task from location state
  const task = location.state?.task;

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    assignee: "",
    priority: "Medium",
    dueDate: "",
  });

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title,
        description: task.description,
        assignee: task.assignee,
        priority: task.priority,
        dueDate: task.dueDate,
      });
    }
  }, [task]);

  const handleClose = () => {
    navigate("/board");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (event) => {
    event.preventDefault();
    const updatedTask = {
      ...task,
      title: formData.title,
      description: formData.description,
      assignee: formData.assignee,
      priority: formData.priority,
      dueDate: formData.dueDate,
    };
    updateTask(updatedTask); // Update the task in the board state
    console.log(updatedTask);
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
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
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
              value={formData.description}
              className={classes["edit-task"]}
              onChange={handleChange}
            />
          </div>
          <div className={classes["modal-field"]}>
            <label htmlFor="assignee">Assignee</label>
            <input
              id="assignee"
              name="assignee"
              type="text"
              value={formData.assignee}
              className={classes["edit-task"]}
              onChange={handleChange}
            />
          </div>
          <div className={classes["modal-field"]}>
            <label htmlFor="priority">Priority</label>
            <div className={classes["select-wrapper"]}>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                className={`${classes["edit-task"]} ${classes["edit-priority"]}`}
                onChange={handleChange}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
          <div className={classes["modal-field"]}>
            <label htmlFor="dueDate">Due Date</label>
            <input
              id="dueDate"
              name="dueDate"
              type="date"
              value={formData.dueDate}
              className={classes["edit-task"]}
              onChange={handleChange}
            />
          </div>
        </form>
        <div className={classes["modal-actions"]}>
          <button className={classes["close-btn"]} onClick={handleClose}>
            Close
          </button>
          <button className={classes["save-btn"]} onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
