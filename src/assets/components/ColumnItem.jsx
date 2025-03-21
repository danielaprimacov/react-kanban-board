import { useState } from "react";

import ClockIcon from "./Icons/ClockIcon";
import CheckCircleIcon from "./Icons/CheckCircleIcon";
import RocketLaunchIcon from "./Icons/RocketLaunchIcon";
import ArrowsOutIcon from "./Icons/ArrowsOutIcon";
import DeleteIcon from "./Icons/DeleteIcon";
import XmarkIcon from "./Icons/XmarkIcon";

function ColumnItem({ column, updateColumnTitle }) {
  const [tasks] = useState(column.tasks);
  const [isEditingColumnTitle, setIsEditingColumnTitle] = useState(false);
  const [title, setTitle] = useState(column.title);
  const [showIcon, setShowIcon] = useState(true);

  const handleTitleChange = (event) => setTitle(event.target.value);

  const handleTitleBlur = () => {
    setIsEditingColumnTitle(false);
    updateColumnTitle(column.id, title);
  };

  const getIcon = () => {
    if (column.id === "To Do") return <RocketLaunchIcon />;
    if (column.id === "In Progress") return <ClockIcon />;
    if (column.id === "Done") return <CheckCircleIcon />;
    return null;
  };

  return (
    <div className="column" key={column.id}>
      <div className="column-title">
        {isEditingColumnTitle ? (
          <div className="edit-title-container">
            <input
              className="change-column-title"
              autoFocus
              onBlur={handleTitleBlur}
              value={title}
              onChange={handleTitleChange}
            />
            {showIcon && <span className="edit-icon">{getIcon()}</span>}
            {showIcon && (
              <div
                className="remove-icon-btn"
                onMouseDown={(e) => e.preventDefault()} 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowIcon(false);
                }}
              >
                <XmarkIcon /> Icon
              </div>
            )}
          </div>
        ) : (
          <div onClick={() => setIsEditingColumnTitle(true)}>
            <h2>
              {title} {showIcon && getIcon()}
            </h2>
          </div>
        )}
      </div>

      <div className="tasks">
        {tasks &&
          tasks.map((task) => (
            <div className="task" key={task.id}>
              <h3 className="task-title highlight-text">
                <div className="expand-task-details-btn">
                  <ArrowsOutIcon />
                </div>
                {task.title}
                <div className="delete-task-btn">
                  <DeleteIcon />
                </div>
              </h3>
              <p className="task-description">{task.description}</p>
              <p className="task-assignee">{task.assignee}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ColumnItem;
