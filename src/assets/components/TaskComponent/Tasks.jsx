import TaskItem from "./TaskItem";

function Tasks({ tasks }) {
  return (
    <div className="tasks">
      {tasks && tasks.map((task) => <TaskItem task={task} key={task.id} />)}
    </div>
  );
}

export default Tasks;
