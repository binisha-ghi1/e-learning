import { useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">My Tasks</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks yet</p>
      ) : (
        <ul className="list-disc pl-5">
          {tasks.map((task, index) => (
            <li key={index} className="text-gray-700">{task}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Tasks;





