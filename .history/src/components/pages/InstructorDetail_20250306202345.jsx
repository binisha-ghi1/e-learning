import { useParams, NavLink } from "react-router-dom";
import { FaStar, FaPhoneAlt, FaEnvelope } from "react-icons/fa6";
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
    contact: "+1 234 567 890",
    email: "nancy.white@example.com",
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
    contact: "+1 987 654 321",
    email: "henry.smiths@example.com",
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
    contact: "+1 543 210 987",
    email: "charlotte@example.com",
    courses: [
      { id: "data-science-charlotte", name: "Data Science" },
      { id: "brand-management", name: "Brand Management" }
    ]
  },
  "jordan": {
    name: "Jordan",
    image: jordan,
    bio: "A skilled public speaker and project management expert with over a decade of experience in leadership training.",
    rating: 4.5,
    contact: "+1 678 345 123",
    email: "jordan@example.com",
    courses: [
      { id: "project-management", name: "Project Management" },
      { id: "public-speaking", name: "Public Speaking & Presentation" }
    ]
  },
  "ethan": {
    name: "Ethan",
    image: ethan,
    bio: "A creative professional with expertise in business analytics, 3D modeling, and animation.",
    rating: 4.7,
    contact: "+1 321 654 789",
    email: "ethan@example.com",
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
    return (
      <div className="text-center mt-10">
        <p className="text-red-500 text-xl font-semibold">Instructor not found!</p>
        <NavLink to="/instructors" className="text-blue-500 underline">Back to Instructors</NavLink>
      </div>
    );
  }

  return (
    <div className="p-8 flex justify-center">
      <div className="bg-gray-200 shadow-lg rounded-2xl w-80 p-6 flex flex-col items-center">
        {/* Instructor Image */}
        <img src={instructor.image} alt={instructor.name} className="w-32 h-32 rounded-full shadow-md" />
        
        {/* Name & Rating */}
        <h1 className="text-3xl font-bold mt-4">{instructor.name}</h1>

        {/* Dynamic Rating Display */}
        <div className="flex items-center gap-1 text-yellow-400 text-2xl mt-2">
          {Array.from({ length: Math.floor(instructor.rating) }, (_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-blue-950 text-xl font-semibold ml-1">{instructor.rating}</span>
        </div>

        {/* Bio */}
        <p className="mt-4 text-gray-700 text-center">{instructor.bio}</p>

        {/* Contact & Email */}
        <div className="mt-4 flex flex-col items-center gap-2">
          <p className="flex items-center gap-2 text-blue-950">
            <FaPhoneAlt /> {instructor.contact}
          </p>
          <p className="flex items-center gap-2 text-blue-950">
            <FaEnvelope /> 
            <a href={`mailto:${instructor.email}`} className="hover:underline">
              {instructor.email}
            </a>
          </p>
        </div>

        {/* Courses Taught */}
        <h2 className="text-2xl font-semibold mt-6">Courses Taught</h2>
        <ul className="mt-2 space-y-1 text-center">
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


