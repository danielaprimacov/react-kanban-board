import { useState, useRef } from "react";
import { useDrop } from "react-dnd";

import ClockIcon from "../Icons/ClockIcon";
import CheckCircleIcon from "../Icons/CheckCircleIcon";
import RocketLaunchIcon from "../Icons/RocketLaunchIcon";
import XmarkIcon from "../Icons/XmarkIcon";
import SimplePlusIcon from "../Icons/SimplePlusIcon";

import Tasks from "../TaskComponent/Tasks";

function ColumnItem({
  column,
  updateColumnTitle,
  moveTask,
  addTask,
  deleteTask,
}) {
  const [isEditingColumnTitle, setIsEditingColumnTitle] = useState(false);
  const [title, setTitle] = useState(column.title);
  const [showIcon, setShowIcon] = useState(true);
  const dropZoneRef = useRef(null);

  const extendedMargin = 100;

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

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "TASK",
    drop: (item, monitor) => {
      moveTask(item.id, column.id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  drop(dropZoneRef);

  return (
    <div
      ref={dropZoneRef}
      style={{
        paddingLeft: extendedMargin,
        paddingRight: extendedMargin,
        marginLeft: -extendedMargin,
        marginRight: -extendedMargin,
      }}
    >
      <div
        className="column"
        style={{
          backgroundColor: isOver && canDrop ? "#f0f0f023" : "inherit",
        }}
      >
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
        <div className="add-task-container">
          <div className="add-task-btn" onClick={() => addTask(column.id)}>
            <SimplePlusIcon /> Add new Task
          </div>
        </div>
        <Tasks tasks={column.tasks} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default ColumnItem;
