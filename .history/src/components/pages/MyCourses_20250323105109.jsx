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
  const [role, setRole] = useState('student');

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setRole(currentUser.role || 'student');
    }

    const savedEnrolled = localStorage.getItem('enrolledCourses');
    const savedActive = localStorage.getItem('activeCourses');
    const savedCompleted = localStorage.getItem('completedCourses');

    if (savedEnrolled) setEnrolledCourses(JSON.parse(savedEnrolled));
    if (savedActive) setActiveCourses(JSON.parse(savedActive));
    if (savedCompleted) setCompletedCourses(JSON.parse(savedCompleted));
  }, []);

  const moveToActive = (course) => {
    const updatedEnrolled = enrolledCourses.filter((c) => c.id !== course.id);
    const updatedActive = [...activeCourses, course];

    setEnrolledCourses(updatedEnrolled);
    setActiveCourses(updatedActive);

    localStorage.setItem('enrolledCourses', JSON.stringify(updatedEnrolled));
    localStorage.setItem('activeCourses', JSON.stringify(updatedActive));
  };

  const markAsCompleted = (course) => {
    const updatedActive = activeCourses.filter((c) => c.id !== course.id);
    const updatedCompleted = [...completedCourses, course];

    setActiveCourses(updatedActive);
    setCompletedCourses(updatedCompleted);

    localStorage.setItem('activeCourses', JSON.stringify(updatedActive));
    localStorage.setItem('completedCourses', JSON.stringify(updatedCompleted));
  };

  const removeCourse = (course, source) => {
    let updateFunction;
    let storageKey;

    if (source === 'enrolled') {
      updateFunction = setEnrolledCourses;
      storageKey = 'enrolledCourses';
    } else if (source === 'active') {
      updateFunction = setActiveCourses;
      storageKey = 'activeCourses';
    } else if (source === 'completed') {
      updateFunction = setCompletedCourses;
      storageKey = 'completedCourses';
    }

    updateFunction((prev) => {
      const updatedCourses = prev.filter((c) => c.id !== course.id);
      localStorage.setItem(storageKey, JSON.stringify(updatedCourses));
      return updatedCourses;
    });
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl text-center mb-8">My Courses</h1>

      <div className="flex flex-row justify-center space-x-8 border-b pb-4">
        {['enrolled', 'active', 'completed'].map((tab) => (
          <div
            key={tab}
            className={`cursor-pointer text-lg font-semibold ${currentTab === tab ? 'text-blue-500' : 'hover:text-blue-500'}`}
            onClick={() => setCurrentTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} Courses ({
              tab === 'enrolled' ? enrolledCourses.length :
              tab === 'active' ? activeCourses.length :
              completedCourses.length
            })
          </div>
        ))}
      </div>

      <div className="mt-6 bg-gray-100 p-4 rounded-lg">
        {currentTab === 'enrolled' && (
          <Enrolled 
            enrolledCourses={enrolledCourses} 
            activateCourse={moveToActive} 
            unenrollCourse={removeCourse}
          />
        )}
        {currentTab === 'active' && (
          <Active 
            activeCourses={activeCourses} 
            markAsCompleted={markAsCompleted} 
          />
        )}
        {currentTab === 'completed' && (
          <Completed 
            completedCourses={completedCourses} 
            removeCourse={removeCourse} 
          />
        )}
      </div>
    </div>
  );
};

export default MyCourses;














