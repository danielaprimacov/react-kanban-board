import kanbanData from "../kanban.json";

import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { act, useState } from "react";

import Column from "../components/Column";

const tasksById = kanbanData.reduce((acc, task) => {
  acc[task.id] = task;
  return acc;
}, {});

const initialColumns = {
  "To Do": {
    id: "To Do",
    title: "To Do",
    taskIds: kanbanData
      .filter((task) => task.status === "To Do")
      .map((task) => task.id),
  },
  "In Progress": {
    id: "In Progress",
    title: "In Progress",
    taskIds: kanbanData
      .filter((task) => task.status === "In Progress")
      .map((task) => task.id),
  },
  Done: {
    id: "Done",
    title: "Done",
    taskIds: kanbanData
      .filter((task) => task.status === "Done")
      .map((task) => task.id),
  },
};

function Tasks() {
  const [tasks, setTasks] = useState(tasksById);
  const [columns, setColumns] = useState(initialColumns);

  const findContainer = (id) => {
    for (const containerId in columns) {
      if (columns[containerId].taskIds.includes(id)) {
        return containerId;
      }
    }
    return null;
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeContainerId = findContainer(active.id);
    const overContainerId = findContainer(over.id) || activeContainerId;

    if (!activeContainerId || !overContainerId) return;

    if (activeContainerId === overContainerId) {
      const container = columns[activeContainerId];
      const oldIndex = container.taskIds.indexOf(active.id);
      const newIndex = container.taskIds.indexOf(over.id);
      if (oldIndex !== newIndex) {
        const newTaskIds = arrayMove(container.taskIds, oldIndex, newIndex);
        setColumns({
          ...columns,
          [activeContainerId]: {
            ...container,
            taskIds: newTaskIds,
          },
        });
      }
    } else {
      const startContainer = columns[activeContainerId];
      const finishContainer = columns[overContainerId];

      const newStartTaskIds = startContainer.taskIds.filter(
        (id) => id !== active.id
      );
      const newFinishTaskIds = [...finishContainer.taskIds, active.id];

      setColumns({
        ...columns,
        [activeContainerId]: {
          ...startContainer,
          taskIds: newStartTaskIds,
        },
        [overContainerId]: {
          ...finishContainer,
          taskIds: newFinishTaskIds,
        },
      });

      const updatedTask = { ...tasks[active.id], status: overContainerId };
      setTasks({
        ...tasks,
        [active.id]: updatedTask,
      });
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="board">
        {Object.values(columns).map((column) => (
          <SortableContext
            key={column.id}
            items={column.taskIds}
            strategy={rectSortingStrategy}
          >
            <Column
              column={column}
              tasks={column.taskIds.map((id) => tasks[id])}
            />
          </SortableContext>
        ))}
      </div>
    </DndContext>
  );
}

export default Tasks;
