import { useState } from "react";

import kanbanData from "../kanban.json";
import Columns from "./Columns";

function KanbanBoard() {
  return (
    <>
      <Columns data={kanbanData} />
    </>
  );
}

export default KanbanBoard;
