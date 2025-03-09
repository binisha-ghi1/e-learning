import React, { useState } from 'react';
import Enrolled from './Enrolled';
import Active from './Active';
import Completed from './Completed';

const MyCourses = () => {
 
  // State to hold enrolled courses
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [activeCourses, setActiveCourses] = useState([]);
  const [completedCourses, setCompletedCourses] = useState([]);

  // Handle enrolling a course
  const handleEnroll = (course) => {
    if (!enrolledCourses.find((c) => c.id === course.id)) {
      setEnrolledCourses((prevCourses) => [...prevCourses, course]);
    }
  };

  const handleEnroll = (course) => {
    if (!enrolledCourses.find((c) => c.id === course.id)) {
      setEnrolledCourses((prevCourses) => [...prevCourses, course]);
    }
  };

  const handleComplete = (course) => {
    if (!enrolledCourses.find((c) => c.id === course.id)) {
      setEnrolledCourses((prevCourses) => [...prevCourses, course]);
    }
  };

  return (
    <div>
      <h1 className="text-3xl text-center mt-8">My Courses</h1>

      {/* If there are no enrolled courses, show a message */}
      {enrolledCourses.length === 0 ? (
        <div className="p-8 text-center">
          <h2 className="text-2xl font-semibold mb-6">You have not enrolled in any courses yet.</h2>
          {/* Display available courses only when there are no enrolled courses */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseList.map((course) => (
              <div key={course.id} className="bg-white p-6 rounded-lg shadow-lg">
                <img src={course.image} alt={course.name} className="w-full h-48 object-cover rounded-lg" />
                <h2 className="text-xl font-semibold mt-4">{course.name}</h2>
                <p className="mt-2 text-gray-600">Instructor: {course.instructor}</p>
                <p className="mt-2 font-semibold">Duration: {course.duration}</p>
                <p className="mt-2 font-semibold">Price: {course.price}</p>
                <button
                  onClick={() => handleEnroll(course)}
                  className="bg-blue-600 text-white py-2 px-4 rounded mt-4"
                >
                  Enroll in Course
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Display enrolled courses
        <Enrolled enrolledCourses={enrolledCourses} />
      )}
    </div>
  );
};

export default MyCourses;





