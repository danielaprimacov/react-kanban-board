import { useState } from "react";

import PlusIcon from "../Icons/PlusIcon";
import ColumnItem from "./ColumnItem";

function Columns({ data }) {
  const groupedTasks = data.reduce((acc, task) => {
    if (!acc[task.status]) {
      acc[task.status] = [];
    }
    acc[task.status].push(task);
    return acc;
  }, {});

  const defaultColumnTitles = ["To Do", "In Progress", "Done"];

  const initialColumns = defaultColumnTitles.map((status) => ({
    id: status,
    title: status,
    tasks: groupedTasks[status] || [],
  }));

  const [columns, setColumns] = useState(initialColumns);

  const updateColumnTitle = (columnId, newTitle) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.id === columnId ? { ...column, title: newTitle } : column
      )
    );
  };

  const addColumn = () => {
    const newColumnId = `new-${Date.now()}`;
    const newColumn = {
      id: newColumnId,
      title: "New Column",
      tasks: [],
    };
    setColumns((prevColumns) => [...prevColumns, newColumn]);
  };

  const moveTask = (draggedTaskId, targetColumnId) => {
    console.log("Moving task", draggedTaskId, "to", targetColumnId);
    setColumns((prevColumns) => {
      // Create a new copy of columns with a copy of their tasks.
      const newColumns = prevColumns.map((column) => ({
        ...column,
        tasks: [...column.tasks],
      }));

      let taskToMove = null;
      // Remove the task from its original column.
      newColumns.forEach((column) => {
        const taskIndex = column.tasks.findIndex(
          (task) => String(task.id) === String(draggedTaskId)
        );
        if (taskIndex !== -1) {
          taskToMove = column.tasks[taskIndex];
          column.tasks.splice(taskIndex, 1);
        }
      });

      if (taskToMove) {
        // Optionally update the task's status.
        taskToMove.status = targetColumnId;
        // Add the task to the target column.
        const targetColumn = newColumns.find(
          (column) => column.id === targetColumnId
        );
        if (targetColumn) {
          targetColumn.tasks.push(taskToMove);
        } else {
          console.warn("Target column not found:", targetColumnId);
        }
      } else {
        console.warn("Task not found for id:", draggedTaskId);
      }
      return newColumns;
    });
  };

  return (
    <>
      <button className="add-column-btn" onClick={addColumn}>
        <PlusIcon />
        Add Column
      </button>
      <div className="kanban-content">
        <div className="columns">
          {columns.map((column) => (
            <ColumnItem
              key={column.id}
              column={column}
              updateColumnTitle={updateColumnTitle}
              moveTask={moveTask}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Columns;
