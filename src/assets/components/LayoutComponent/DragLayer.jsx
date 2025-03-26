import { useDragLayer } from "react-dnd";

import classes from "../TaskComponent/TaskItem.module.css";

function getItemStyles(currentOffset) {
  if (!currentOffset) {
    return { display: "none" };
  }
  const { x, y } = currentOffset;
  return {
    position: "fixed",
    pointerEvents: "none",
    top: 0,
    left: 0,
    transform: `translate(${x}px, ${y}px)`,
    zIndex: 100,
  };
}

function DragLayer() {
  const { isDragging, item, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    isDragging: monitor.isDragging(),
    currentOffset: monitor.getSourceClientOffset(),
  }));

  if (!isDragging || !item) {
    return null;
  }

  const priorityColorMap = {
    low: "#d4edda5d",
    medium: "#fff3cd5d",
    high: "#f8d7da5d",
  };

  const defaultColor = "#ffaf545d";

  const textColor = {
    low: "#1B5E20",
    medium: "#BF360C",
    high: "#B71C1C",
  };

  const taskPriority = String(item.priority).toLowerCase();
  const titleColor = textColor[taskPriority] || "#000000";

  const backgroundColor = priorityColorMap[taskPriority] || defaultColor;

  const gradientClass =
    {
      low: classes.gradientLow,
      medium: classes.gradientMedium,
      high: classes.gradientHigh,
    }[taskPriority] || "";

  return (
    <div style={getItemStyles(currentOffset)}>
      <div className={classes.task} style={{ opacity: 0.7, backgroundColor }}>
        <h3
          className={`${classes["task-title"]} ${gradientClass}`}
          style={{ color: titleColor }}
        >
          <div className={classes["expand-task-details-btn"]}></div>
          {item.title}
          <div className={classes["delete-task-btn"]}></div>
        </h3>
        <p className={classes["task-description"]}>{item.description}</p>
        <p className={classes["task-assignee"]}>{item.assignee}</p>
      </div>
    </div>
  );
}

export default DragLayer;
