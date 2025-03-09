import React, { useState, useEffect } from 'react';
import Enrolled from './Enrolled';
import Active from './Active';
import Completed from './Completed';

const MyCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [activeCourses, setActiveCourses] = useState([]);
  const [completedCourses, setCompletedCourses] = useState([]);
  const [currentTab, setCurrentTab] = useState('enrolled');

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

      <div className="flex flex-row justify-center space-x-8 border-b pb-4">
        <div 
          className={`cursor-pointer text-lg font-semibold ${currentTab === 'enrolled' ? 'text-blue-500' : 'hover:text-blue-500'}`}
          onClick={() => setCurrentTab('enrolled')}
        >
          Enrolled Courses ({enrolledCourses.length})
        </div>
        <div 
          className={`cursor-pointer text-lg font-semibold ${currentTab === 'active' ? 'text-blue-500' : 'hover:text-blue-500'}`}
          onClick={() => setCurrentTab('active')}
        >
          Active Courses ({activeCourses.length})
        </div>
        <div 
          className={`cursor-pointer text-lg font-semibold ${currentTab === 'completed' ? 'text-blue-500' : 'hover:text-blue-500'}`}
          onClick={() => setCurrentTab('completed')}
        >
          Completed Courses ({completedCourses.length})
        </div>
      </div>

      <div className="mt-6 bg-gray-100 p-4 rounded-lg">
        {currentTab === 'enrolled' && <Enrolled enrolledCourses={enrolledCourses} handleActive={handleActive} />}
        {currentTab === 'active' && <Active activeCourses={activeCourses} handleCompleted={handleCompleted} />}
        {currentTab === 'completed' && <Completed completedCourses={completedCourses} />}
      </div>
    </div>
  );
};

export default MyCourses;









