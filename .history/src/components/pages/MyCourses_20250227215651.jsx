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
       <div className="w-full pt-16 flex justify-center gap-16 pb-20 bg-gray-200">
             <div className="flex flex-col items-center text-center pb-20 pl-8 pr-8 pt-10 bg-white rounded-lg shadow-2xl shadow-gray-400">
               <PiBookOpenTextBold className="text-5xl mb-2 text-blue-500" />
               <h1 className="text-2xl  pt-8 font-semibold">Enrolled Courses</h1>
             </div>
             <div className="flex flex-col items-center text-center pb-20 pl-10 pr-10 pt-10 bg-white rounded-lg shadow-2xl shadow-gray-400">
               <RiGraduationCapFill className="text-5xl mb-2 text-green-500" />
               <h1 className="text-2xl pt-8 font-semibold">Active Courses</h1>
             </div>
             <div className="flex flex-col items-center text-center pb-20 pl-5 pr-5 pt-10 bg-white rounded-lg shadow-2xl shadow-gray-400">
               <BiSolidTrophy className="text-5xl mb-2 text-yellow-500" />
               <h1 className="text-2xl pt-8 font-semibold">Completed Courses</h1>
             </div>
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

