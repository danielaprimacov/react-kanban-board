import React from "react";
import SortableTask from "./SortableTask";

function Column({ column, tasks }) {
  return (
    <div
      style={{
        margin: 8,
        border: "1px solid lightgrey",
        borderRadius: 4,
        width: 300,
        minHeight: 500,
        padding: 8,
      }}
    >
      <h3>{column.title}</h3>
      {tasks.map((task) => (
        <SortableTask key={task.id} task={task} />
      ))}
    </div>
  );
}

export default Column;
