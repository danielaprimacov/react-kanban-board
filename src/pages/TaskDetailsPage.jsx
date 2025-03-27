import { useParams } from "react-router-dom";
import TaskDetails from "../assets/components/TaskComponent/TaskDetails";

function TaskDetailsPage() {
  const { taskId } = useParams();
  return <TaskDetails taskId={taskId} />;
}

export default TaskDetailsPage;
