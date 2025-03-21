import { useDragLayer } from "react-dnd";

function getItemStyles(currentOffset) {
  if (!currentOffset) {
    return { display: "none" };
  }
  const { x, y } = currentOffset;
  return {
    position: "fixed",
    pointerEvents: "none",
    top: 0,
    left: 0,
    transform: `translate(${x}px, ${y}px)`,
    zIndex: 100,
  };
}

function DragLayer() {
  const { isDragging, item, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    isDragging: monitor.isDragging(),
    currentOffset: monitor.getSourceClientOffset(),
  }));

  if (!isDragging || !item) {
    return null;
  }

  return (
    <div style={getItemStyles(currentOffset)}>
      <div className="task" style={{ opacity: 0.7 }}>
        <h3 className="task-title highlight-text">
          <div className="expand-task-details-btn">
          </div>
          {item.title}
          <div className="delete-task-btn">
          </div>
        </h3>
        <p className="task-description">{item.description}</p>
        <p className="task-assignee">{item.assignee}</p>
      </div>
    </div>
  );
}

export default DragLayer;
