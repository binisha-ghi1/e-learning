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

