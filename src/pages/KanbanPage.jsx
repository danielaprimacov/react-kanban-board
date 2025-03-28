import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Outlet } from "react-router-dom";

import KanbanBoard from "../assets/components/KanbanBoard";
import KanbanProvider from "../assets/components/KanbanProvider";

function KanbanPage() {
  return (
    <KanbanProvider>
      <DndProvider backend={HTML5Backend}>
        <KanbanBoard />
      </DndProvider>
      <Outlet />
    </KanbanProvider>
  );
}

export default KanbanPage;
