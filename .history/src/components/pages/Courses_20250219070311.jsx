import React, { useState } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Courses = ({ cart, setCart }) => {
  const [category, setCategory] = useState('All Courses');
  const [searchTerm, setSearchTerm] = useState(""); // ✅ New state for search input

  const courseList = [
    { name: 'UI/UX Design', category: 'Designing Courses', id: 'ui-ux' },
    { name: 'Graphic Design', category: 'Designing Courses', id: 'graphic-design' },
    { name: 'Data Science', category: 'IT Courses', id: 'data-science' },
    { name: 'MERN Stack', category: 'IT Courses', id: 'mern-stack' },
    { name: 'Web Development', category: 'IT Courses', id: 'web-development' },
    { name: 'Project Management', category: 'Business Courses', id: 'project-management' },
    { name: 'Digital Marketing', category: 'Marketing Courses', id: 'digital-marketing' },
    { name: 'Business Analytics', category: 'Business Courses', id: 'business-analytics' },
    { name: 'Brand Management', category: 'Free Courses', id: 'brand-management' },
    { name: 'Public Speaking & Presentation', category: 'Free Courses', id: 'public-speaking' },
    { name: '3D Modeling & Animation', category: 'Creative Arts Courses', id: '3d-modeling' },
  ];

  // ✅ Updated filter logic
  const filteredCourses = courseList.filter(course => 
    (category === 'All Courses' || course.category === category) &&
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) // ✅ Filters by search
  );

  return (
    <div className='flex flex-col items-center gap-4 pt-10'>
      {/* ✅ Search Input */}
      <input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-400 px-4 py-2 rounded-full w-80 focus:outline-none focus:border-blue-500"
      />

      {/* Display Courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <div key={course.id} className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold text-center">{course.name}</h2>
              <p className="text-gray-600">{course.category}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No courses found.</p>
        )}
      </div>
    </div>
  );
};

export default Courses;
