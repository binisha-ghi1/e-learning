import { useParams, NavLink } from "react-router-dom";
import nancy from '../../assets/images/nancy.png';
import henry from '../../assets/images/henry.png';
import charlotte from '../../assets/images/charlotte.png';
import jordan from '../../assets/images/jordan.png';
import ethan from '../../assets/images/ethan.png';

// Sample instructor data
const instructors = {
  "nancy-white": {
    name: "Nancy White",
    image: nancy,
    bio: "An expert in UI/UX and Graphic Design with 10+ years of experience.",
    rating: 4.8,
    courses: [
      { id: "ui-ux", name: "UI/UX Design" },
      { id: "graphic-design", name: "Graphic Design" },
      { id: "digital-marketing", name: "Digital Marketing" }
    ]
  },
  "henry-smiths": {
    name: "Henry Smiths",
    image: henry,
    bio: "A senior software engineer specializing in Data Science and Web Development.",
    rating: 4.7,
    courses: [
      { id: "data-science", name: "Data Science" },
      { id: "mern-stack", name: "MERN Stack" }
    ]
  },
  "charlotte": {
    name: "Charlotte",
    image: charlotte,
    bio: "An experienced data scientist and marketing strategist specializing in brand management and analytics.",
    rating: 4.6,
    courses: [
      { id: "data-science-charlotte", name: "Data Science" },
      { id: "brand-management", name: "Brand Management" }
    ]
  },
  "jordan": {
    name: "Jordan",
    image: jordan,
    bio: "A skilled public speaker and project management expert with over a decade of experience in leadership training.",
    rating: "4.5",
    courses: [
      { id: "project-management", name: "Project Management" },
      { id: "public-speaking", name: "Public Speaking & Presentation" }
    ]
  },
  "ethan": {
    name: "Ethan",
    image: ethan,
    bio: "A creative professional with expertise in business analytics, 3D modeling, and animation.",
    rating: "4.7",
    courses: [
      { id: "business-analytics", name: "Business Analytics" },
      { id: "3d-modeling", name: "3D Modeling & Animation" }
    ]
  },
};

function InstructorDetail() {
  const { id } = useParams();
  const instructor = instructors[id];

  if (!instructor) {
    return <p className="text-center text-red-500 text-xl">Instructor not found!</p>;
  }

  return (
    <div className="p-8">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
        {/* Instructor Image */}
        <img src={instructor.image} alt={instructor.name} className="w-32 h-32 rounded-full" />
        
        {/* Name & Rating */}
        <h1 className="text-3xl font-bold mt-4">{instructor.name}</h1>
        <p className="text-lg font-semibold text-gray-700">⭐ {instructor.rating}</p>

        {/* Bio */}
        <p className="mt-4 text-gray-700 text-center">{instructor.bio}</p>

        {/* Courses Taught */}
        <h2 className="text-2xl font-semibold mt-6">Courses Taught</h2>
        <ul className="list-disc mt-2">
          {instructor.courses.map((course, index) => (
            <li key={index}>
              <NavLink to={`/course/${course.id}`} className="text-blue-900 hover:underline">
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
