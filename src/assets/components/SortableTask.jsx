import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function SortableTask({ task }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: 16,
    margin: "0 0 8px 0",
    border: "1px solid grey",
    borderRadius: 4,
    backgroundColor: "white",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <strong>{task.title}</strong>
      <p>{task.description}</p>
      <small>Assignee: {task.assignee}</small>
      <br />
      <small>Due: {task.dueDate}</small>
    </div>
  );
}

export default SortableTask;
