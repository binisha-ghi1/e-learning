import React from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const Active = ({ activeCourses }) => {
  if (activeCourses.length === 0) {
    return (
      <div className="text-center text-xl font-bold">
        No active courses at the moment.
      </div>
    );
  }

  // Prepare data for the pie chart (for example, count courses per instructor)
  const instructorData = activeCourses.reduce((acc, course) => {
    const instructor = course.instructor;
    if (acc[instructor]) {
      acc[instructor]++;
    } else {
      acc[instructor] = 1;
    }
    return acc;
  }, {});

  const pieData = Object.keys(instructorData).map((instructor) => ({
    name: instructor,
    value: instructorData[instructor],
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Active Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activeCourses.map((course) => (
          <div key={course.id} className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4">{course.name}</h2>
            <p className="mt-2 text-gray-600">{course.instructor}</p>
            <p className="mt-2 font-semibold">Duration: {course.duration}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold text-center mt-8 mb-4">Instructor Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Active;


