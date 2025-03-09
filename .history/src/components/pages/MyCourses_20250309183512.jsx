import React, { useState, useEffect } from 'react';
import Enrolled from './Enrolled';
import Active from './Active';
import Completed from './Completed';
import { auth } from '../../firebase/firebaseConfig';

const MyCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [activeCourses, setActiveCourses] = useState([]);
  const [completedCourses, setCompletedCourses] = useState([]);
  const [currentTab, setCurrentTab] = useState('enrolled');
  const [role, setRole] = useState('student'); // Assume 'student' by default

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setRole(currentUser.role || 'student'); // Assuming role is saved in user object
    }

    const savedEnrolled = localStorage.getItem('enrolledCourses');
    const savedActive = localStorage.getItem('activeCourses');
    const savedCompleted = localStorage.getItem('completedCourses');

    if (savedEnrolled) setEnrolledCourses(JSON.parse(savedEnrolled));
    if (savedActive) setActiveCourses(JSON.parse(savedActive));
    if (savedCompleted) setCompletedCourses(JSON.parse(savedCompleted));
  }, []);


  const handleActive = (course) => {
    const updatedEnrolled = enrolledCourses.filter((c) => c.id !== course.id);
    const updatedActive = [...activeCourses, course];
  
    setEnrolledCourses(updatedEnrolled);
    setActiveCourses(updatedActive);
  
    localStorage.setItem('enrolledCourses', JSON.stringify(updatedEnrolled));
    localStorage.setItem('activeCourses', JSON.stringify(updatedActive));
  };

 
  const handleCompleted = (course) => {
    const updatedCompleted = [...completedCourses, course];
    setCompletedCourses(updatedCompleted);
  
    localStorage.setItem('completedCourses', JSON.stringify(updatedCompleted));
  };


  const handleUnenroll = (course, source) => {
    let updatedCourses;
    if (source === 'enrolled') {
      updatedCourses = enrolledCourses.filter((c) => c.id !== course.id);
      setEnrolledCourses(updatedCourses);
      localStorage.setItem('enrolledCourses', JSON.stringify(updatedCourses));
    } else if (source === 'active') {
      updatedCourses = activeCourses.filter((c) => c.id !== course.id);
      setActiveCourses(updatedCourses);
      localStorage.setItem('activeCourses', JSON.stringify(updatedCourses));
    } else if (source === 'completed') {
      updatedCourses = completedCourses.filter((c) => c.id !== course.id);
      setCompletedCourses(updatedCourses);
      localStorage.setItem('completedCourses', JSON.stringify(updatedCourses));
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
        {currentTab === 'enrolled' && <Enrolled enrolledCourses={enrolledCourses} handleActive={handleActive} handleUnenroll={handleUnenroll} />}
        {currentTab === 'active' && <Active activeCourses={activeCourses} handleCompleted={handleCompleted} />}
        {currentTab === 'completed' && <Completed completedCourses={completedCourses} handleUnenroll={handleUnenroll} />}
      </div>
    </div>
  );
};

export default MyCourses;












