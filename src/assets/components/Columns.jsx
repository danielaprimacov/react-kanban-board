import { useState } from "react";

import PlusIcon from "./Icons/PlusIcon";
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
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Columns;
