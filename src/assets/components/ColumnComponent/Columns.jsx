// Columns.js
import { useContext, useState } from "react";
import KanbanContext from "../KanbanContext";
import PlusIcon from "../Icons/PlusIcon";
import ColumnItem from "./ColumnItem";
import AddTaskModal from "../UI/AddTaskModal";
import classes from "./Columns.module.css";

function Columns() {
  const {
    columns,
    updateColumnTitle,
    addColumn,
    moveTask,
    addTask,
    deleteTask,
  } = useContext(KanbanContext);
  const [showModal, setShowModal] = useState(false);
  const [currentColumnId, setCurrentColumnId] = useState(null);

  const openTaskModal = (columnId) => {
    setCurrentColumnId(columnId);
    setShowModal(true);
  };

  const closeTaskModal = () => {
    setShowModal(false);
    setCurrentColumnId(null);
  };

  const handleSaveTask = (taskData) => {
    addTask(currentColumnId, taskData);
    closeTaskModal();
  };

  return (
    <>
      <button className={classes["add-column-btn"]} onClick={addColumn}>
        <PlusIcon />
        Add Column
      </button>
      <div className={classes["kanban-content"]}>
        <div className={classes.columns}>
          {columns.map((column) => (
            <ColumnItem
              key={column.id}
              column={column}
              updateColumnTitle={updateColumnTitle}
              moveTask={moveTask}
              addTask={openTaskModal}
              deleteTask={deleteTask}
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
