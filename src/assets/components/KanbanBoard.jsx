import kanbanData from "../kanban.json";
import Columns from "./ColumnComponent/Columns";
import DragLayer from "./LayoutComponent/DragLayer";

function KanbanBoard() {
  return (
    <div className="wrapper">
      <Columns data={kanbanData} />
      <DragLayer />
    </div>
  );
}

export default KanbanBoard;
