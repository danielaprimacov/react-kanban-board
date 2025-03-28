import FlipMove from "react-flip-move";

import TaskItem from "./TaskItem";

function Tasks({ tasks, deleteTask }) {
  return (
    <FlipMove
      className="tasks"
      duration={350}
      easing="ease-out"
      animateOnUpdate={true}
    >
      {tasks &&
        tasks.map((task) => (
          <div key={`${task.id}-${task.updatedAt || 0}`}>
            <TaskItem task={task} deleteTask={deleteTask} />
          </div>
        ))}
    </FlipMove>
  );
}

export default Tasks;
