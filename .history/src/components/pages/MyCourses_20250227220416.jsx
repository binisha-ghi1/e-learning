import React, { useState } from 'react';
import { PiBookOpenTextBold } from "react-icons/pi";
import { RiGraduationCapFill } from "react-icons/ri";
import { BiSolidTrophy } from "react-icons/bi";
import { PieChart } from 'react-minimal-pie-chart';  // Importing PieChart

// Mock courses data
const courses = [
  { id: 1, name: 'React Basics', status: 'Active' },
  { id: 2, name: 'Advanced JavaScript', status: 'Completed' },
  { id: 3, name: 'Node.js Introduction', status: 'Enrolled' },
  { id: 4, name: 'CSS Grid and Flexbox', status: 'Active' },
  { id: 5, name: 'Python for Beginners', status: 'Completed' }
];

const MyCourses = () => {
  const [filter, setFilter] = useState('All');

  const filterItems = (category) => {
    setFilter(category);
  };

  const filteredCourses = courses.filter(course => 
    filter === 'All' || course.status === filter
  );

  // Count Active, Enrolled, and Completed courses
  const activeCourses = courses.filter(course => course.status === 'Active').length;
  const enrolledCourses = courses.filter(course => course.status === 'Enrolled').length;
  const completedCourses = courses.filter(course => course.status === 'Completed').length;

  return (
    <div>
      {/* Filter Buttons */}
      <div className="w-full pt-16 flex justify-center gap-16 pb-20 bg-gray-200">
        <div
          onClick={() => filterItems('Enrolled')}
          className="flex flex-col items-center text-center pb-20 pl-8 pr-8 pt-10 bg-white rounded-lg shadow-2xl shadow-gray-400 cursor-pointer"
        >
          <PiBookOpenTextBold className="text-5xl mb-2 text-blue-500" />
          <h1 className="text-2xl pt-8 font-semibold">Enrolled Courses</h1>
        </div>
        <div
          onClick={() => filterItems('Active')}
          className="flex flex-col items-center text-center pb-20 pl-10 pr-10 pt-10 bg-white rounded-lg shadow-2xl shadow-gray-400 cursor-pointer"
        >
          <RiGraduationCapFill className="text-5xl mb-2 text-green-500" />
          <h1 className="text-2xl pt-8 font-semibold">Active Courses</h1>
        </div>
        <div
          onClick={() => filterItems('Completed')}
          className="flex flex-col items-center text-center pb-20 pl-5 pr-5 pt-10 bg-white rounded-lg shadow-2xl shadow-gray-400 cursor-pointer"
        >
          <BiSolidTrophy className="text-5xl mb-2 text-yellow-500" />
          <h1 className="text-2xl pt-8 font-semibold">Completed Courses</h1>
        </div>
      </div>

      {/* Active Courses Section with Pie Chart */}
      {filter === 'Active' && (
        <div className="flex justify-center items-center mt-8">
          <div className="w-64 h-64">
            <PieChart
              data={[
                { title: 'Active', value: activeCourses, color: '#4CAF50' },
                { title: 'Enrolled', value: enrolledCourses, color: '#2196F3' },
                { title: 'Completed', value: completedCourses, color: '#FFEB3B' }
              ]}
              radius={42}
              label={({ data, dataIndex }) => dataIndex === 0 ? `${data[dataIndex].value} Active` : ''}
              labelStyle={{ fontSize: '6px', fontFamily: 'Arial', fill: '#fff' }}
            />
          </div>
        </div>
      )}

      {/* Courses List */}
      <div className="mt-5">
        {filteredCourses.length > 0 ? (
          <ul>
            {filteredCourses.map(course => (
              <li key={course.id} className="mt-2">
                {course.name} - {course.status}
              </li>
            ))}
          </ul>
        ) : (
          <p>No courses available in this category.</p>
        )}
      </div>
    </div>
  );
}

export default MyCourses;


