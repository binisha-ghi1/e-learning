

const Tasks = () => {
 

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        <ul className="space-y-4">
          {tasks.map((task, index) => (
            <li key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
              <p className="text-gray-700 mb-2">{task.description}</p>
              <p className="text-sm text-gray-500"><strong>Due Date:</strong> {task.dueDate}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tasks;




