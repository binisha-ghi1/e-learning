import { useParams,  NavLink } from "react-router-dom";

import nancy from '../../assets/images/nancy.png'
import henry from '../../assets/images/henry.png'

// Sample instructor data
const instructors = {
  "nancy-white": {
    name: "Nancy White",
    image: "nancy",
    bio: "An expert in UI/UX and Graphic Design with 10+ years of experience.",
    rating: 4.8,
    courses: [
      { id: "ui-ux", name: "UI/UX Design" },
      { id: "graphic-design", name: "Graphic Design" }
    ]
  },
  "henry-smiths": {
    name: "Henry Smiths",
    image: "henry",
    bio: "A senior software engineer specializing in Data Science and Web Development.",
    rating: 4.7,
    courses: [
      { id: "data-science", name: "Data Science" },
      { id: "mern-stack", name: "MERN Stack" }
    ]
  }
  "Charlotte": {
    name: "Charlotte",
    image: "Charlotte",
    bio: "A senior software engineer specializing in Data Science and Web Development.",
    rating: 4.7,
    courses: [
      { id: "data-science", name: "Data Science" },
      { id: "mern-stack", name: "MERN Stack" }
    ]
  }
  "Jordan": {
    name: "Jordan",
    image: "jordan",
    bio: "A senior software engineer specializing in Data Science and Web Development.",
    rating: 4.7,
    courses: [
      { id: "data-science", name: "Data Science" },
      { id: "mern-stack", name: "MERN Stack" }
    ]
  }
  "Ethan": {
    name: "Ethan",
    image: "ethan",
    bio: "A senior software engineer specializing in Data Science and Web Development.",
    rating: 4.7,
    courses: [
      { id: "data-science", name: "Data Science" },
      { id: "mern-stack", name: "MERN Stack" }
    ]
  }
};

function InstructorDetail() {
  const { id } = useParams();
  const instructor = instructors[id];

  if (!instructor) {
    return <p className="text-center text-red-500 text-xl">Instructor not found!</p>;
  }

  return (
    <div className="p-8 ">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
        {/* Instructor Image */}
        <img src={instructor.image} alt={instructor.name} className="w-32 h-32 rounded-full" />
        
        {/* Name & Rating */}
        <h1 className="text-3xl font-bold mt-4">{instructor.name}</h1>
     

        {/* Bio */}
        <p className="mt-4 text-gray-700 text-center">{instructor.bio}</p>

        {/* Courses Taught */}
        <h2 className="text-2xl font-semibold mt-6">Courses Taught</h2>
        <ul className="list-disc mt-2">
          {instructor.courses.map((course, index) => (
            <li key={index}>
              <NavLink to={`/courses/${course.id}`} className="text-blue-900 hover:underline">
                {course.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InstructorDetail;
