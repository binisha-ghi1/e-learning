import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const Active = ({ activeCourses }) => {
  if (activeCourses.length === 0) {
    return (
      <div className="text-center text-xl font-bold">
        You don't have any active courses right now.
      </div>
    );
  }

  // Summarize the number of courses per instructor
  const instructorData = activeCourses.reduce((acc, course) => {
    acc[course.instructor] = (acc[course.instructor] || 0) + 1;
    return acc;
  }, {});

  // Prepare data for the pie chart
  const pieData = Object.keys(instructorData).map((instructor) => ({
    name: instructor,
    value: instructorData[instructor],
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Your Active Courses</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {activeCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out"
              >
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold">{course.name}</h2>
                <p className="mt-2 text-gray-600">Instructor: {course.instructor}</p>
                <p className="mt-2 font-semibold">Duration: {course.duration}</p>

                <div className="mt-4">
                  <p className="font-semibold">Progress: {course.completion}%</p>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className="bg-blue-500 h-4 rounded-full"
                      style={{ width: `${course.completion}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/3 mt-8 md:mt-0">
          <h2 className="text-2xl font-semibold text-center mb-4">Instructor Breakdown</h2>
          <PieChart width={300} height={300}>
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
        </div>
      </div>
    </div>
  );
};

export default Active;










