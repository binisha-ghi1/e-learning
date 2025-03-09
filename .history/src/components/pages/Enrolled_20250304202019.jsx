import React, { useState } from 'react';

const Enrolled = ({ enrolledCourses, handleEnroll }) => {
  // State to keep track of the number of enrollments
  const [enrollmentCount, setEnrollmentCount] = useState(enrolledCourses.length);

  // Handle enrolling in a new course (call the parent function)
  const handleEnrollCourse = (course) => {
    handleEnroll(course);
    setEnrollmentCount(enrollmentCount + 1); // Update the count
  };

  if (enrolledCourses.length === 0) {
    return (
      <div className="text-center text-xl font-bold">
        You have not enrolled in any courses yet.
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Enrolled Courses</h1>
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold">Courses Enrolled: {enrollmentCount}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {enrolledCourses.map((course) => (
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
      {/* Enroll button (for example, you can add a new course) */}
      <div className="mt-4 text-center">
        <button
          onClick={() => handleEnrollCourse({ 
            id: Date.now(), 
            name: 'New Course', 
            instructor: 'Instructor Name', 
            duration: '3 weeks', 
            image: 'path/to/image.jpg' 
          })}
          className="bg-blue-600 text-white py-2 px-4 rounded"
        >
       
        </button>
      </div>
    </div>
  );
};

export default Enrolled;



