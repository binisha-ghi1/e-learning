import React, { useState } from 'react';
import Enrolled from './Enrolled';
import Active from './Active';
import Completed from './Completed';

const MyCourses = () => {
  // State to hold enrolled, active, and completed courses
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [activeCourses, setActiveCourses] = useState([]);
  const [completedCourses, setCompletedCourses] = useState([]);

  
  
  // Handle moving a course to Active
  const handleActive = (course) => {
    if (!activeCourses.find((c) => c.id === course.id)) {
      setActiveCourses((prevCourses) => [...prevCourses, course]);
    }
  };

  // Handle moving a course to Completed
  const handleCompleted = (course) => {
    if (!completedCourses.find((c) => c.id === course.id)) {
      setCompletedCourses((prevCourses) => [...prevCourses, course]);
    }
  };

  return (
    <div>
      <h1 className="text-3xl text-center mt-8">My Enrolled Courses</h1>

      {/* If there are no enrolled courses, show a message */}
      {enrolledCourses.length === 0 ? (
        <div className="p-8 text-center">
          <h2 className="text-2xl font-semibold mb-6">You have not enrolled in any courses yet.</h2>
        </div>
      ) : (
        <>
          {/* Display enrolled courses */}
          <Enrolled enrolledCourses={enrolledCourses} handleActive={handleActive} />
          {/* Display active courses */}
          <Active activeCourses={activeCourses} handleCompleted={handleCompleted} />
          {/* Display completed courses */}
          <Completed completedCourses={completedCourses} />
        </>
      )}
    </div>
  );
};

export default MyCourses;






