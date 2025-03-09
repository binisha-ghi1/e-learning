import React, { useState } from 'react';


const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      title: "Complete React project",
      description: "Finish building the tasks page and integrate with Firestore.",
      dueDate: "2025-03-10"
    },
    {
      title: "Review PRs",
      description: "Check the pull requests from team members.",
      dueDate: "2025-03-12"
    }
  ]);

  return (
    <div className="tasks-container">
      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              <h3 className="task-title">{task.title}</h3>
              <p className="task-description">{task.description}</p>
              <p className="due-date"><strong>Due Date:</strong> {task.dueDate}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tasks;



