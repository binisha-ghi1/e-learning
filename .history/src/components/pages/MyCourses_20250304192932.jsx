import React, { useState } from 'react';
import Enrolled from './Enrolled';
import Active fom './Active';
imp

const MyCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([
    {
      id: 1,
      name: 'React Basics',
      instructor: 'John Doe',
      duration: '4 weeks',
      image: 'path/to/image.jpg',
    },
    {
      id: 2,
      name: 'Advanced JavaScript',
      instructor: 'Jane Smith',
      duration: '6 weeks',
      image: 'path/to/image.jpg',
    },
    // Other courses...
  ]);

  return (
    <div>
      <h1 className="text-3xl text-center mt-8">My Courses</h1>
      <Enrolled enrolledCourses={enrolledCourses} />
    </div>
  );
};

export default MyCourses;




