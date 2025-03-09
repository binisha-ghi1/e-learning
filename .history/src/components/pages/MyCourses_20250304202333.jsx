import React, { useState, useEffect } from 'react';
import Enrolled from './Enrolled';
import Active from './Active';
import Completed from './Completed';

const MyCourses = () => {
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
    <div className="p-8">
      <h1 className="text-3xl text-center mb-8">My Courses</h1>

      {enrolledCourses.length === 0 ? (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6">You have not enrolled in any courses yet.</h2>
        </div>
      ) : (
        <div className="flex justify-between space-x-6">
          {/* Enrolled Courses */}
          <div className="w-1/3 bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-center">Enrolled Courses</h2>
            <Enrolled enrolledCourses={enrolledCourses} handleActive={handleActive} />
          </div>

          {/* Active Courses */}
          <div className="w-1/3 bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-center">Active Courses</h2>
            <Active activeCourses={activeCourses} handleCompleted={handleCompleted} />
          </div>

          {/* Completed Courses */}
          <div className="w-1/3 bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-center">Completed Courses</h2>
            <Completed completedCourses={completedCourses} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCourses;









