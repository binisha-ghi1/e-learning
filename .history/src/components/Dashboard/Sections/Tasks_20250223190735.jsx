import React from 'react';

const TasksContent = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-6">My Tasks</h2>
    <div className="space-y-4">
      {[
        { title: 'Complete UI/UX Assignment', deadline: 'Tomorrow', priority: 'High' },
        { title: 'Watch MERN Stack Videos', deadline: 'This Week', priority: 'Medium' },
        { title: 'Submit Project Proposal', deadline: 'Next Week', priority: 'Low' }
      ].map((task, index) => (
        <div key={index} className="border rounded-lg p-4 flex justify-between items-center">
          <div>
            <h3 className="font-semibold">{task.title}</h3>
            <p className="text-gray-600 text-sm">Due: {task.deadline}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm ${
            task.priority === 'High' ? 'bg-red-100 text-red-600' :
            task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-600' :
            'bg-green-100 text-green-600'
          }`}>
            {task.priority}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default Tasks;