import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Outlet } from "react-router-dom";

import KanbanBoard from "../assets/components/KanbanBoard";

function KanbanPage() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <KanbanBoard />
      </DndProvider>
      <Outlet />
    </>
  );
}

export default KanbanPage;
