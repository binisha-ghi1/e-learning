import React, { useState } from 'react';
import Enrolled from './Enrolled';
import Active from './Active';

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

  return (
    <div>
      <h1 className="text-3xl text-center mt-8">My Courses</h1>
      
      {/* Render the Enrolled component and pass the enrolledCourses state as a prop */}
      <Enrolled enrolledCourses={enrolledCourses} handleEnroll={handleEnroll} />
      
      {/* You can also add a list of available courses for enrolling */}
      <div className="mt-5 text-center">
        <button
          onClick={() => handleEnroll({ id: Date.now(), name: 'New Course', instructor: 'Instructor', duration: '3 weeks', description: 'Course description', image: 'path/to/image.jpg', video: 'video_link_here' })}
          className="bg-blue-600 text-white py-2 px-4 rounded"
        >
          Enroll in a New Course
        </button>
      </div>
    </div>
  );
};

export default MyCourses;

