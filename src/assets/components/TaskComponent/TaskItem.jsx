import { useDrag } from "react-dnd";

import ArrowsOutIcon from "../Icons/ArrowsOutIcon";
import DeleteIcon from "../Icons/DeleteIcon";

function TaskItem({ task }) {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "TASK",
      item: { id: task.id, title: task.title, description: task.description },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [task]
  );

  return (
    <div
      className="task"
      key={task.id}
      ref={drag}
      style={{ opacity: isDragging ? 1 : 1, cursor: "pointer" }}
    >
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
  );
}

export default TaskItem;
