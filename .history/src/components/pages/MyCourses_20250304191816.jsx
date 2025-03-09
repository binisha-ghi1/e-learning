import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import Enrolled from './Enrolled'; // Import the Enrolled component
import Active from './Active'; // Import the Active component
import Completed from './Completed'; // Import the Completed component

const MyCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState(() => {
    // Retrieve enrolled courses from localStorage on initial load
    const savedEnrolledCourses = localStorage.getItem('enrolledCourses');
    return savedEnrolledCourses ? JSON.parse(savedEnrolledCourses) : [];
  });

  // Handle enrolling in a new course
  const handleEnroll = (course) => {
    // Update the enrolled courses array
    const updatedCourses = [...enrolledCourses, course];
    setEnrolledCourses(updatedCourses);

    // Save to localStorage after enrolling
    localStorage.setItem('enrolledCourses', JSON.stringify(updatedCourses));
  };

  // Function to separate courses into different categories
  const categorizeCourses = (courses) => {
    const enrolled = courses.filter(course => course.status === 'Enrolled');
    const active = courses.filter(course => course.status === 'Active');
    const completed = courses.filter(course => course.status === 'Completed');
    return { enrolled, active, completed };
  };

  const { enrolled, active, completed } = categorizeCourses(enrolledCourses);

  return (
    <div>
      <h1 className="text-3xl text-center mt-8">My Courses</h1>

      {/* Navigation Links */}
      <div className="flex justify-center gap-10 mt-8 mb-8">
        <NavLink
          to="#enrolled" // Add a corresponding id in each section
          className="text-xl font-semibold text-blue-600 hover:text-blue-800"
        >
          Enrolled Courses
        </NavLink>
        <NavLink
          to="#active"
          className="text-xl font-semibold text-blue-600 hover:text-blue-800"
        >
          Active Courses
        </NavLink>
        <NavLink
          to="#completed"
          className="text-xl font-semibold text-blue-600 hover:text-blue-800"
        >
          Completed Courses
        </NavLink>
      </div>

      {/* Enrolled Courses Section */}
      <div id="enrolled" className="mt-8">
        <h2 className="text-2xl text-center font-semibold mb-4">Enrolled Courses</h2>
        <Enrolled enrolledCourses={enrolled} />
      </div>

      {/* Active Courses Section */}
      <div id="active" className="mt-8">
        <h2 className="text-2xl text-center font-semibold mb-4">Active Courses</h2>
        <Active activeCourses={active} />
      </div>

      {/* Completed Courses Section */}
      <div id="completed" className="mt-8">
        <h2 className="text-2xl text-center font-semibold mb-4">Completed Courses</h2>
        <Completed completedCourses={completed} />
      </div>
    </div>
  );
};

export default MyCourses;



