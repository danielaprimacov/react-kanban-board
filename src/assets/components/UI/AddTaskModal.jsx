import { useState } from "react";

function AddTaskModal({ isOpen, onClose, onSave }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  const handleSave = () => {
    // Validate that all required fields are filled
    if (!title || !description || !assignee || !dueDate) {
      alert("Please fill in all fields.");
      return;
    }
    // Automatically set createdDate to the current date (yyyy-mm-dd)
    const createdDate = new Date().toISOString().split("T")[0];

    // Pass the new task data back to the parent component
    onSave({
      title,
      description,
      assignee,
      priority,
      dueDate,
      createdDate,
    });

    // Clear input fields after saving
    setTitle("");
    setDescription("");
    setAssignee("");
    setPriority("Medium");
    setDueDate("");
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content" tabIndex="0">
        <h2>Add New Task</h2>
        <div className="modal-field">
          <label>Title:</label>
          <input
            className="add-task add-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="modal-field">
          <label>Description:</label>
          <input
            className="add-task add-description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="modal-field">
          <label>Assignee:</label>
          <input
            className="add-task add-assignee"
            type="text"
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
          />
        </div>
        <div className="modal-field">
          <label>Priority:</label>
          <select
            className="add-task add-priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="modal-field">
          <label>Due Date:</label>
          <input
            className="add-task add-duedate"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className="modal-actions">
          <button onClick={onClose} className="cancel-btn">
            Cancel
          </button>
          <button onClick={handleSave} className="save-btn">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTaskModal;
