import { useState } from "react";
import PlusIcon from "./Icons/PlusIcon";

import kanbanData from "../kanban.json";

function KanbanBoard() {
  const columns = kanbanData.reduce((acc, task) => {
    if (!acc[task.status]) {
      acc[task.status] = [];
    }
    acc[task.status].push(task);
    return acc;
  }, {});

  const columnOrder = ["To Do", "In Progress", "Done"];

  return (
    <>
      <button className="add-column-btn">
        <PlusIcon />
        Add Column
      </button>
      <div className="kanban-content">
        <div className="columns">
          {columnOrder.map((status) => (
            <div className="column" key={status}>
              <div className="column-title">
                <h2>{status}</h2>
              </div>
              <div className="tasks">
                {columns[status] &&
                  columns[status].map((task) => (
                    <div className="task" key={task.id}>
                      <h3 className="task-title highlight-text">
                        {task.title}
                      </h3>
                      <p className="task-description">{task.description}</p>
                      <p className="task-assignee">{task.assignee}</p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default KanbanBoard;
