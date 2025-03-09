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
    <div>
      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p><strong>Due Date:</strong> {task.dueDate}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tasks;


