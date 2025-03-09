import React, { useState } from 'react';
import { PiBookOpenTextBold } from "react-icons/pi";
import { RiGraduationCapFill } from "react-icons/ri";
import { BiSolidTrophy } from "react-icons/bi";

  const courseList = [
    {
      name: "UI/UX Design",
      image: ui,
      duration: "2.5 Months",
      price: "10,000",
      instructor: "Nancy White",
      instructorImage: instructorImages["Nancy White"],
      category: "Designing Courses",
      id: "ui-ux",
    },
    {
      name: "Graphic Design",
      image: graphic,
      duration: "2.5 Months",
      price: "10,000",
      instructor: "Nancy White",
      instructorImage: instructorImages["Nancy White"],
      category: "Designing Courses",
      id: "graphic-design",
    },
    {
      name: "Data Science",
      image: science,
      duration: "3 Months",
      price: "10,000",
      instructor: "Henry Smiths",
      instructorImage: instructorImages["Henry Smiths"],
      category: "IT Courses",
      id: "data-science",
    },
    {
      name: "MERN Stack",
      image: stack,
      duration: "3 Months",
      price: "10,000",
      instructor: "Henry Smiths",
      instructorImage: instructorImages["Henry Smiths"],
      category: "IT Courses",
      id: "mern-stack",
    },
    {
      name: "Web Development",
      image: web,
      duration: "3 Months",
      price: "10,000",
      instructor: "Henry Smiths",
      instructorImage: instructorImages["Henry Smiths"],
      category: "IT Courses",
      id: "web-development",
    },
    {
      name: "Project Management",
      image: project,
      duration: "2.5 Months",
      price: "10,000",
      instructor: "Jordan",
      instructorImage: instructorImages["Jordan"],
      category: "Business Courses",
      id: "project-management",
    },
    {
      name: "Digital Marketing",
      image: digital,
      duration: "3 Months",
      price: "10,000",
      instructor: "Nancy White",
      instructorImage: instructorImages["Nancy White"],
      category: "Marketing Courses",
      id: "digital-marketing",
    },
    {
      name: "Business Analytics",
      image: business,
      duration: "3 Months",
      price: "10,000",
      instructor: "Ethan",
      instructorImage: instructorImages["Ethan"],
      category: "Business Courses",
      id: "business-analytics",
    },
    {
      name: "Brand Management",
      image: brand,
      duration: "1.5 Month",
      price: "Free",
      instructor: "Charlotte",
      instructorImage: instructorImages["Charlotte"],
      category: "Free Courses",
      id: "brand-management",
    },
    {
      name: "Public Speaking & Presentation",
      image: pocket,
      duration: "1 Month",
      price: "Free",
      instructor: "Jordan",
      instructorImage: instructorImages["Jordan"],
      category: "Free Courses",
      id: "public-speaking",
    },
    {
      name: "3D Modeling & Animation",
      image: threeD,
      duration: "3 Months",
      price: "10,000",
      instructor: "Ethan",
      instructorImage: instructorImages["Ethan"],
      category: "Creative Arts Courses",
      id: "3d-modeling",
    },
  ];


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
      {/* Filter Buttons */}
      <div className="w-full pt-16 flex justify-center gap-16 pb-20 bg-gray-200">
        <div
          onClick={() => filterItems('Enrolled')}
          className="flex flex-col items-center text-center pb-20 pl-8 pr-8 pt-10 bg-white rounded-lg shadow-2xl shadow-gray-400 cursor-pointer"
        >
          <PiBookOpenTextBold className="text-5xl mb-2 text-blue-500" />
          <h1 className="text-2xl pt-8 font-semibold">Enrolled Courses</h1>
        </div>
        <div
          onClick={() => filterItems('Active')}
          className="flex flex-col items-center text-center pb-20 pl-10 pr-10 pt-10 bg-white rounded-lg shadow-2xl shadow-gray-400 cursor-pointer"
        >
          <RiGraduationCapFill className="text-5xl mb-2 text-green-500" />
          <h1 className="text-2xl pt-8 font-semibold">Active Courses</h1>
        </div>
        <div
          onClick={() => filterItems('Completed')}
          className="flex flex-col items-center text-center pb-20 pl-5 pr-5 pt-10 bg-white rounded-lg shadow-2xl shadow-gray-400 cursor-pointer"
        >
          <BiSolidTrophy className="text-5xl mb-2 text-yellow-500" />
          <h1 className="text-2xl pt-8 font-semibold">Completed Courses</h1>
        </div>
      </div>

      {/* Courses List */}
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

