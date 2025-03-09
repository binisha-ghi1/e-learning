import React, { useState } from 'react';
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
      
      {/* Enrolled Courses Section */}
      <div c></div>
      <div className="mt-8">
        <h2 className="text-2xl text-center font-semibold mb-4">Enrolled Courses</h2>
        <Enrolled enrolledCourses={enrolled} />
      </div>
      
      {/* Active Courses Section */}
      <div className="mt-8">
        <h2 className="text-2xl text-center font-semibold mb-4">Active Courses</h2>
        <Active activeCourses={active} />
      </div>
      
      {/* Completed Courses Section */}
      <div className="mt-8">
        <h2 className="text-2xl text-center font-semibold mb-4">Completed Courses</h2>
        <Completed completedCourses={completed} />
      </div>

      {/* Enroll in a New Course */}
      <div className="mt-5 text-center">
        <button
          onClick={() => handleEnroll({ id: Date.now(), name: 'New Course', instructor: 'Instructor', duration: '3 weeks', description: 'Course description', image: 'path/to/image.jpg', video: 'video_link_here', status: 'Enrolled' })}
          className="bg-blue-600 text-white py-2 px-4 rounded"
        >
          Enroll in a New Course
        </button>
      </div>
    </div>
  );
};

export default MyCourses;


