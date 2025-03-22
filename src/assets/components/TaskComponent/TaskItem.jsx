import { useDrag } from "react-dnd";

import ArrowsOutIcon from "../Icons/ArrowsOutIcon";
import DeleteIcon from "../Icons/DeleteIcon";

function TaskItem({ task, deleteTask }) {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "TASK",
      item: {
        id: task.id,
        title: task.title,
        description: task.description,
        priority: task.priority,
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [task]
  );

  const priorityColorMap = {
    low: "#98DC9A",
    medium: "#FF975B",
    high: "#FF754F",
  };

  const textColor = {
    low: "#1B5E20",
    medium: "#BF360C",
    high: "#B71C1C",
  };

  const defaultColor = "#ffaf545d";

  const taskPriority = String(task.priority).toLowerCase();
  const backgroundColor = priorityColorMap[taskPriority] || defaultColor;
  const titleColor = textColor[taskPriority] || "#000000";

  const deleteTaskHandler = (event) => {
    event.stopPropagation();
    if (deleteTask) {
      deleteTask(task.id);
    }
  };

  return (
    <div
      className="task"
      key={task.id}
      ref={drag}
      style={{
        opacity: isDragging ? 0 : 1,
        cursor: "pointer",
        transform: isDragging ? "scale(0.7)" : "scale(1)",
        transition: "transform 0.5s ease, opacity 0.5s ease",
        pointerEvents: isDragging ? "none" : "auto",
        backgroundColor,
      }}
    >
      <h3
        className={`task-title ${
          {
            low: "gradient-low",
            medium: "gradient-medium",
            high: "gradient-high",
          }[taskPriority] || ""
        }`}
        style={{ color: titleColor }}
      >
        <div className="expand-task-details-btn">
          <ArrowsOutIcon />
        </div>
        {task.title}
        <div className="delete-task-btn" onClick={deleteTaskHandler}>
          <DeleteIcon />
        </div>
      </h3>
      <p className="task-description">{task.description}</p>
      <p className="task-assignee">{task.assignee}</p>
    </div>
  );
}

export default TaskItem;
