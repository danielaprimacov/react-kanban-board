import { useContext } from "react";
import KanbanContext from "../KanbanContext";

import classes from "./Statistics.module.css";

function Statistics() {
  const { columns } = useContext(KanbanContext);

  // Flatten all tasks across all columns.
  const allTasks = columns.reduce((acc, col) => [...acc, ...col.tasks], []);

  // Filter tasks with status "Done" (case-insensitive).
  const doneTasks = allTasks.filter(
    (task) => task.status.toLowerCase() === "done"
  );

  // Calculate the date one month ago.
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

  // Use a date field from your data (e.g., dueDate) as a proxy for completion date.
  // Adjust if you have a dedicated completion date field.
  const tasksCompletedLastMonth = doneTasks.filter((task) => {
    if (task.dueDate) {
      const completionDate = new Date(task.dueDate);
      return completionDate >= oneMonthAgo && completionDate <= new Date();
    }
    return false;
  });

  // Create a breakdown of priorities for the monthly tasks.
  const monthlyPriorityCounts = tasksCompletedLastMonth.reduce((acc, task) => {
    const priority = task.priority.toLowerCase();
    acc[priority] = (acc[priority] || 0) + 1;
    return acc;
  }, {});

  // Create a breakdown of priorities for all tasks.
  const overallPriorityCounts = allTasks.reduce((acc, task) => {
    const priority = task.priority.toLowerCase();
    acc[priority] = (acc[priority] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className={classes.statistics}>
      <h1 className={classes["highlight-text"]}>Statistics</h1>

      {/* Monthly Statistics Section */}
      <section className={classes.section}>
        <h2>Monthly Completed Tasks</h2>
        <p className={classes["total-tasks"]}>
          <strong>Total tasks completed in the last month:</strong>{" "}
          {tasksCompletedLastMonth.length}
        </p>
        <h3>Task Priority Breakdown (Monthly)</h3>
        <ul>
          <li className={classes["low-priority"]}>
            <strong>Low Priority:</strong> {monthlyPriorityCounts.low || 0}
          </li>
          <li className={classes["medium-priority"]}>
            <strong>Medium Priority:</strong>{" "}
            {monthlyPriorityCounts.medium || 0}
          </li>
          <li className={classes["high-priority"]}>
            <strong>High Priority:</strong> {monthlyPriorityCounts.high || 0}
          </li>
        </ul>
      </section>

      {/* Overall Tasks Section */}
      <section className={classes.section}>
        <h2>All Tasks Overview</h2>
        <p className={classes["total-tasks"]}>
          <strong>Total tasks:</strong> {allTasks.length}
        </p>
        <h3>Overall Task Priority Breakdown</h3>
        <ul>
          <li className={classes["low-priority"]}>
            <strong>Low Priority:</strong> {overallPriorityCounts.low || 0}
          </li>
          <li className={classes["medium-priority"]}>
            <strong>Medium Priority:</strong>{" "}
            {overallPriorityCounts.medium || 0}
          </li>
          <li className={classes["high-priority"]}>
            <strong>High Priority:</strong> {overallPriorityCounts.high || 0}
          </li>
        </ul>

        <h3>Task List</h3>
        <table className={classes.taskTable}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Assignee</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Created Date</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {allTasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.assignee}</td>
                <td>{task.status}</td>
                <td>{task.priority}</td>
                <td>{task.createdDate}</td>
                <td>{task.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Statistics;
