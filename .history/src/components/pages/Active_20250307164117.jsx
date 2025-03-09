import React from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer, Legend } from 'recharts';

const Active = ({ activeCourses }) => {
  if (activeCourses.length === 0) {
    return (
      <div className="text-center text-xl font-bold">
        No active courses at the moment.
      </div>
    );
  }

  // Prepare data for the pie chart (for example, calculate the average completion percentage per instructor)
  const instructorData = activeCourses.reduce((acc, course) => {
    const instructor = course.instructor;
    if (!acc[instructor]) {
      acc[instructor] = { totalCompletion: 0, courseCount: 0 };
    }
    acc[instructor].totalCompletion += course.completion;
    acc[instructor].courseCount += 1;
    return acc;
  }, {});

  const pieData = Object.keys(instructorData).map((instructor) => {
    const averageCompletion =
      instructorData[instructor].totalCompletion / instructorData[instructor].courseCount;
    return {
      name: instructor,
      value: averageCompletion,
      completion: averageCompletion.toFixed(0), // Show percentage completion
    };
  });

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Active Courses</h1>
      <div className="flex flex-row justify-start gap-8">
        {/* Courses Section */}
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
                <p className="mt-2 text-gray-600">{course.instructor}</p>
                <p className="mt-2 font-semibold">Duration: {course.duration}</p>

                {/* Progress Bar for Completion */}
                <div className="mt-4">
                  <p className="font-semibold">Completion: {course.completion}%</p>
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

        {/* Pie Chart Section */}
        <div className="w-full md:w-1/3 mt-8 md:mt-0 flex justify-end">
          <h2 className="text-2xl font-semibold text-center mb-4">Instructor Distribution</h2>
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
                label={({ name, completion }) => `${name}: ${completion}%`} // Show completion % in label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Active;









