import { useState } from "react";
import kanbanData from "../kanban.json";
import KanbanContext from "./KanbanContext";

const KanbanProvider = ({ children }) => {
  // Group tasks by their status
  const groupedTasks = kanbanData.reduce((acc, task) => {
    if (!acc[task.status]) acc[task.status] = [];
    acc[task.status].push(task);
    return acc;
  }, {});
  const defaultColumnTitles = ["To Do", "In Progress", "Done"];
  const initialColumns = defaultColumnTitles.map((status) => ({
    id: status,
    title: status,
    tasks: (groupedTasks[status] || []).sort((a, b) => a.id - b.id),
  }));

  const [columns, setColumns] = useState(initialColumns);

  // Update column title
  const updateColumnTitle = (columnId, newTitle) => {
    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId ? { ...col, title: newTitle } : col
      )
    );
  };

  // Add a new column
  const addColumn = () => {
    const newColumn = {
      id: `new-${Date.now()}`,
      title: "New Column",
      tasks: [],
    };
    setColumns((prev) => [...prev, newColumn]);
  };

  // Move a task from one column to another
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

  // Add a new task to a specific column
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

  // Delete a task by its id
  const deleteTask = (taskId) => {
    setColumns((prev) =>
      prev.map((col) => ({
        ...col,
        tasks: col.tasks.filter((task) => task.id !== taskId),
      }))
    );
  };

  // Update an existing task with new details
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
      {children}
    </KanbanContext.Provider>
  );
};

export default KanbanProvider;
