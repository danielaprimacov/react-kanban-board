import { useState } from "react";

import PlusIcon from "../Icons/PlusIcon";
import ColumnItem from "./ColumnItem";
import AddTaskModal from "../UI/AddTaskModal";

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
  const [showModal, setShowModal] = useState(false);
  const [currentColumnId, setCurrentColumnId] = useState(null);

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
      const newColumns = prevColumns.map((column) => ({
        ...column,
        tasks: [...column.tasks],
      }));

      let taskToMove = null;
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
        taskToMove.status = targetColumnId;
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

  const addTask = (columnId) => {
    const title = prompt("Enter task title:");
    const description = prompt("Enter task description:");
    const assignee = prompt("Enter task assignee:");
    if (title && description && assignee) {
      const newTask = {
        id: Date.now(),
        title,
        description,
        assignee,
        status: columnId,
      };
      setColumns((prevColumns) =>
        prevColumns.map((column) =>
          column.id === columnId
            ? { ...column, tasks: [newTask, ...column.tasks] }
            : column
        )
      );
    }
  };

  const openTaskModal = (columnId) => {
    setCurrentColumnId(columnId);
    setShowModal(true);
  };

  // Close modal
  const closeTaskModal = () => {
    setShowModal(false);
    setCurrentColumnId(null);
  };

  // Handle saving a new task from modal data
  const handleSaveTask = (taskData) => {
    const newTask = {
      id: Date.now(),
      ...taskData,
      status: currentColumnId,
    };
    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.id === currentColumnId
          ? { ...column, tasks: [newTask, ...column.tasks] }
          : column
      )
    );
    closeTaskModal();
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
              addTask={openTaskModal}
            />
          ))}
        </div>
      </div>
      <AddTaskModal
        isOpen={showModal}
        onClose={closeTaskModal}
        onSave={handleSaveTask}
      />
    </>
  );
}

export default Columns;
