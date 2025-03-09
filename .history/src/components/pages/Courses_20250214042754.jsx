import { useState } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

// Import course images
import ui from '../../assets/images/ui.png';
import graphic from '../../assets/images/graphic.png';
import science from '../../assets/images/science.png';
import web from '../../assets/images/web.png';
import project from '../../assets/images/project.png';
import digital from '../../assets/images/digital.png';
import brand from '../../assets/images/brand.png';
import pocket from '../../assets/images/pocket.png';
import threeD from '../../assets/images/3d.png';
import stack from '../../assets/images/stack.png';
import business from '../../assets/images/business.png';

// Import instructor images
import nancy from '../../assets/images/instructors/nancy.png';
import henry from '../../assets/images/instructors/henry.png';
import jordan from '../../assets/images/instructors/jordan.png';
import ethan from '../../assets/images/instructors/ethan.png';
import charlotte from '../../assets/images/instructors/charlotte.png';

function Courses() {

  const courseList = [
    { name: 'UI/UX Design', image: ui, duration: '2.5 Months', price: '10,000', instructor: 'Nancy White', instructorImage: nancy, category: 'Designing Courses', id: 'ui-ux' },
    { name: 'Graphic Design', image: graphic, duration: '2.5 Months', price: '10,000', instructor: 'Nancy White', instructorImage: nancy, category: 'Designing Courses', id: 'graphic-design' },
    { name: 'Data Science', image: science, duration: '3 Months', price: '10,000', instructor: 'Henry Smiths', instructorImage: henry, category: 'IT Courses', id: 'data-science' },
    { name: 'MERN Stack', image: stack, duration: '3 Months', price: '10,000', instructor: 'Henry Smiths', instructorImage: henry, category: 'IT Courses', id: 'mern-stack' },
    { name: 'Web Development', image: web, duration: '3 Months', price: '10,000', instructor: 'Henry Smiths', instructorImage: henry, category: 'IT Courses', id: 'web-development' },
    { name: 'Project Management', image: project, duration: '2.5 Months', price: '10,000', instructor: 'Jordan', instructorImage: jordan, category: 'Business Courses', id: 'project-management' },
    { name: 'Digital Marketing', image: digital, duration: '3 Months', price: '10,000', instructor: 'Nancy White', instructorImage: nancy, category: 'Marketing Courses', id: 'digital-marketing' },
    { name: 'Business Analytics', image: business, duration: '3 Months', price: '10,000', instructor: 'Ethan', instructorImage: ethan, category: 'Business Courses', id: 'business-analytics' },
    { name: 'Brand Management', image: brand, duration: '1.5 Month', price: 'Free', instructor: 'Charlotte', instructorImage: charlotte, category: 'Free Courses', id: 'brand-management' },
    { name: 'Public Speaking & Presentation', image: pocket, duration: '1 Month', price: 'Free', instructor: 'Jordan', instructorImage: jordan, category: 'Free Courses', id: 'public-speaking' },
    { name: '3D Modeling & Animation', image: threeD, duration: '3 Months', price: '10,000', instructor: 'Ethan', instructorImage: ethan, category: 'Creative Arts Courses', id: '3d-modeling' },
  ];

  // State to store the category that is clicked
  const [category, setCategory] = useState('All Courses');

  // Filter courses based on the selected category
  const filteredCourses = courseList.filter(course => 
    category === 'All Courses' || course.category === category
  );

  return (
    <div className='flex flex-row gap-20 mt-20'>
      <div className='flex'>
        <div className='flex flex-col items-start justify-start pl-20'>
          <h1 className='text-xl font-extrabold pl-12 pb-4'>OUR COURSES</h1>
          <div className='flex flex-col bg-gray-100 text-center pt-4 pb-4 pl-4 pr-4'>
            <p className='text-xl text-blue-950 font-bold underline pb-2'>Category</p>
            {['All Courses', 'Free Courses', 'IT Courses', 'Designing Courses', 'Marketing Courses', 'Business Courses', 'Creative Arts Courses'].map((cat) => (
              <p key={cat} className='font-mono pb-1 hover:underline cursor-pointer' onClick={() => setCategory(cat)}>
                {cat}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg f






