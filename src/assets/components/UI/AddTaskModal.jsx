import { useState } from "react";
import classes from "./AddTaskModal.module.css";

function AddTaskModal({ isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    assignee: "",
    priority: "Medium",
    dueDate: "",
  });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, description, assignee, dueDate } = formData;
    if (!title || !description || !assignee || !dueDate) {
      setError("* Please fill in all fields.");
      return;
    }

    const createdDate = new Date().toISOString().split("T")[0];
    onSave({
      ...formData,
      createdDate,
    });

    setFormData({
      title: "",
      description: "",
      assignee: "",
      priority: "Medium",
      dueDate: "",
    });
    setError("");
  };

  if (!isOpen) return null;

  return (
    <div className={classes["modal-overlay"]}>
      <div className={classes["modal-content"]} tabIndex="0">
        <h2>Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <div className={classes["modal-field"]}>
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              className={`${classes["add-task"]} ${classes["add-title"]}`}
            />
          </div>
          <div className={classes["modal-field"]}>
            <label htmlFor="description">Description:</label>
            <input
              id="description"
              name="description"
              type="text"
              value={formData.description}
              onChange={handleChange}
              className={`${classes["add-task"]} ${classes["add-description"]}`}
            />
          </div>
          <div className={classes["modal-field"]}>
            <label htmlFor="assignee">Assignee:</label>
            <input
              id="assignee"
              name="assignee"
              type="text"
              value={formData.assignee}
              onChange={handleChange}
              className={`${classes["add-task"]} ${classes["add-assignee"]}`}
            />
          </div>
          <div className={classes["modal-field"]}>
            <label htmlFor="priority">Priority:</label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className={`${classes["add-task"]} ${classes["add-priority"]}`}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className={classes["modal-field"]}>
            <label htmlFor="dueDate">Due Date:</label>
            <input
              id="dueDate"
              name="dueDate"
              type="date"
              value={formData.dueDate}
              onChange={handleChange}
              className={`${classes["add-task"]} ${classes["add-duedate"]}`}
            />
          </div>
          {error && <p className={classes.error}>{error}</p>}
          <div className={classes["modal-actions"]}>
            <button
              type="button"
              onClick={onClose}
              className={classes["cancel-btn"]}
            >
              Cancel
            </button>
            <button type="submit" className={classes["save-btn"]}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTaskModal;
