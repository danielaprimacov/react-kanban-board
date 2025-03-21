import kanbanData from "../kanban.json";
import Columns from "./ColumnComponent/Columns";
import DragLayer from "./DragLayer";

function KanbanBoard() {
  return (
    <>
      <Columns data={kanbanData} />
      <DragLayer />
    </>
  );
}

export default KanbanBoard;
