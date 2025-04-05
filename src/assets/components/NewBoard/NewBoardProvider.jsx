import { useState } from "react";
import KanbanContext from "../KanbanContext";

import classes from "./NewBoard.module.css";

const NewKanbanProvider = ({ children }) => {
  // Start with no default columns
  const [columns, setColumns] = useState([]);

  const updateColumnTitle = (columnId, newTitle) => {
    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId ? { ...col, title: newTitle } : col
      )
    );
  };

  const addColumn = () => {
    const newColumn = {
      id: `new-${Date.now()}`,
      title: "New Column",
      tasks: [],
    };
    setColumns((prev) => [...prev, newColumn]);
  };

  const moveTask = (draggedTaskId, targetColumnId) => {
    setColumns((prev) => {
      const newColumns = prev.map((col) => ({ ...col, tasks: [...col.tasks] }));
      let taskToMove = null;
      newColumns.forEach((col) => {
        const index = col.tasks.findIndex(
          (task) => String(task.id) === String(draggedTaskId)
        );
        if (index !== -1) {
          taskToMove = col.tasks[index];
          col.tasks.splice(index, 1);
        }
      });
      if (taskToMove) {
        taskToMove.status = targetColumnId;
        const targetCol = newColumns.find((col) => col.id === targetColumnId);
        if (targetCol) {
          targetCol.tasks.push(taskToMove);
        }
      }
      return newColumns;
    });
  };

  const addTask = (columnId, taskData) => {
    const newTask = {
      id: Date.now(),
      ...taskData,
      status: columnId,
    };
    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId
          ? {
              ...col,
              tasks: [...col.tasks, newTask].sort(
                (a, b) => new Date(a.date) - new Date(b.date)
              ),
            }
          : col
      )
    );
  };

  const deleteTask = (taskId) => {
    setColumns((prev) =>
      prev.map((col) => ({
        ...col,
        tasks: col.tasks.filter((task) => task.id !== taskId),
      }))
    );
  };

  const updateTask = (updatedTask) => {
    setColumns((prev) =>
      prev.map((col) => ({
        ...col,
        tasks: col.tasks.map((task) =>
          task.id === updatedTask.id
            ? { ...task, ...updatedTask, updatedAt: Date.now() }
            : task
        ),
      }))
    );
  };

  const contextValue = {
    columns,
    updateColumnTitle,
    addColumn,
    moveTask,
    addTask,
    deleteTask,
    updateTask,
  };

  return (
    <KanbanContext.Provider value={contextValue}>
      <h1 className={classes["highlight-title"]}>
        NewBoard: Your Canvas for Innovation
      </h1>
      {children}
    </KanbanContext.Provider>
  );
};

export default NewKanbanProvider;
