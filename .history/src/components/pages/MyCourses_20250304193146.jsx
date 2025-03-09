import React, { useState } from 'react';
import Enrolled from './Enrolled';
import ui from '../../assets/images/ui.png';
import graphic from '../../assets/images/graphic.png';
import science from '../../assets/images/science.png';
import web from '../../assets/images/web.png';
import project from '../../assets/images/project.png';
import digital from '../../assets/images/digital.png';
import brand from '../../assets/images/brand.png';
import pocket from '../../assets/images/pocket.png';
import threeD from '../../assets/images/threeD.png';
import stack from '../../assets/images/stack.png';
import business from '../../assets/images/business.png';
import python from '../../assets/images/python.png';

const MyCourses = () => {
  // Define the list of courses
  const courseList = [
    { name: 'UI/UX Design', image: ui, duration: '2.5 Months', price: '10,000', instructor: 'Nancy White', id: 'ui-ux' },
    { name: 'Graphic Design', image: graphic, duration: '2.5 Months', price: '10,000', instructor: 'Nancy White', id: 'graphic-design' },
    { name: 'Data Science', image: science, duration: '3 Months', price: '10,000', instructor: 'Henry Smiths', id: 'data-science' },
    { name: 'MERN Stack', image: stack, duration: '3 Months', price: '10,000', instructor: 'Henry Smiths', id: 'mern-stack' },
    { name: 'Web Development', image: web, duration: '3 Months', price: '10,000', instructor: 'Henry Smiths', id: 'web-development' },
    { name: 'Project Management', image: project, duration: '2.5 Months', price: '10,000', instructor: 'Jordan', id: 'project-management' },
    { name: 'Digital Marketing', image: digital, duration: '3 Months', price: '10,000', instructor: 'Nancy White', id: 'digital-marketing' },
    { name: 'Business Analytics', image: business, duration: '3 Months', price: '10,000', instructor: 'Ethan', id: 'business-analytics' },
    { name: 'Brand Management', image: brand, duration: '1.5 Month', price: 'Free', instructor: 'Charlotte', id: 'brand-management' },
    { name: 'Public Speaking & Presentation', image: pocket, duration: '1 Month', price: 'Free', instructor: 'Jordan', id: 'public-speaking' },
    { name: '3D Modeling & Animation', image: threeD, duration: '3 Months', price: '10,000', instructor: 'Ethan', id: '3d-modeling' },
    { name: "Python with Django", image: python, duration: "3 Months", price: "10,000", instructor: "Ethan", id: "python" },
  ];

  // State to hold enrolled courses
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // Handle enrolling a course
  const handleEnroll = (course) => {
    if (!enrolledCourses.find((c) => c.id === course.id)) {
      setEnrolledCourses((prevCourses) => [...prevCourses, course]);
    }
  };

  return (
    <div>
      <h1 className="text-3xl text-center mt-8">My Courses</h1>
      
      {/* Display list of available courses to enroll in */}
      <div className="p-8">
        <h2 className="text-2xl text-center font-semibold mb-6">Available Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseList.map((course) => (
            <div key={course.id} className="bg-white p-6 rounded-lg shadow-lg">
              <img src={course.image} alt={course.name} className="w-full h-48 object-cover rounded-lg" />
              <h2 className="text-xl font-semibold mt-4">{course.name}</h2>
              <p className="mt-2 text-gray-600">Instructor: {course.instructor}</p>
              <p className="mt-2 font-semibold">Duration: {course.duration}</p>
              <p className="mt-2 font-semibold">Price: {course.price}</p>
              <button
                onClick={() => handleEnroll(course)}
                className="bg-blue-600 text-white py-2 px-4 rounded mt-4"
              >
                Enroll in Course
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Display enrolled courses */}
      <Enrolled enrolledCourses={enrolledCourses} />
    </div>
  );
};

export default MyCourses;




