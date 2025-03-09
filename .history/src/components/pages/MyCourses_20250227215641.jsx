import React, { useState } from 'react';

const MyCourses = () => {
  const [filter, setFilter] = useState('All');

  const filterItems = (category) => {
    setFilter(category);
  };

  
  const filteredCourses = courses.filter(course => 
    filter === 'All' || course.status === filter
  );

  return (
    <div>
      <div>
        <h1 className='pt-20 pb-5 text-3xl font-bold text-blue-950'>My Courses</h1>
        <div className='flex flex-row gap-10 text-xl font-bold text-blue-950 cursor-pointer'>
          <button onClick={() => filterItems("All")} className="">
            Enrolled Courses
          </button>
          <button onClick={() => filterItems("Active")}>
            Active Courses
          </button>
          <button onClick={() => filterItems("Completed")}>
            Completed Courses
          </button>
        </div>
      </div>
   
      <div className="mt-5">
        {filteredCourses.length > 0 ? (
          <ul>
            {filteredCourses.map(course => (
              <li key={course.id} className="mt-2">
                {course.name} - {course.status}
              </li>
            ))}
          </ul>
        ) : (
          <p>No courses available in this category.</p>
        )}
      </div>
    </div>
  );
}

export default MyCourses;

