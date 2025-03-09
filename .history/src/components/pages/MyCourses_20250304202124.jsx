import React, { useState, useEffect } from 'react';
import Enrolled from './Enrolled';
import Active from './Active';
import Completed from './Completed';

const MyCourses = () => {
  // State to hold enrolled, active, and completed courses
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [activeCourses, setActiveCourses] = useState([]);
  const [completedCourses, setCompletedCourses] = useState([]);

  // Load courses from localStorage on mount
  useEffect(() => {
    const savedEnrolled = localStorage.getItem('enrolledCourses');
    const savedActive = localStorage.getItem('activeCourses');
    const savedCompleted = localStorage.getItem('completedCourses');

    if (savedEnrolled) setEnrolledCourses(JSON.parse(savedEnrolled));
    if (savedActive) setActiveCourses(JSON.parse(savedActive));
    if (savedCompleted) setCompletedCourses(JSON.parse(savedCompleted));
  }, []);

  // Move a course to Active and save to localStorage
  const handleActive = (course) => {
    if (!activeCourses.find((c) => c.id === course.id)) {
      const updatedActive = [...activeCourses, course];
      setActiveCourses(updatedActive);
      localStorage.setItem('activeCourses', JSON.stringify(updatedActive));
    }
  };

  // Move a course to Completed and save to localStorage
  const handleCompleted = (course) => {
    if (!completedCourses.find((c) => c.id === course.id)) {
      const updatedCompleted = [...completedCourses, course];
      setCompletedCourses(updatedCompleted);
      localStorage.setItem('completedCourses', JSON.stringify(updatedCompleted));
    }
  };

  return (
    <div>
      {enrolledCourses.length === 0 ? (
        <div className="p-8 text-center">
          <h2 className="text-2xl font-semibold mb-6">You have not enrolled in any courses yet.</h2>
        </div>
      ) : (
        <>
          <Enrolled enrolledCourses={enrolledCourses} handleActive={handleActive} />
          <Active activeCourses={activeCourses} handleCompleted={handleCompleted} />
          <Completed completedCourses={completedCourses} />
        </>
      )}
    </div>
  );
};

export default MyCourses;








