import { NavLink } from "react-router-dom";
import nancy from '../../assets/images/nancy.png';
import henry from '../../assets/images/henry.png';
import charlotte from '../../assets/images/charlotte.png';
import jordan from '../../assets/images/jordan.png';
import ethan from '../../assets/images/ethan.png';

const courseList = [
  { name: "UI/UX Design", instructor: "Nancy White", id: "ui-ux" },
  { name: "Graphic Design", instructor: "Nancy White", id: "graphic-design" },
  { name: "Digital Marketing", instructor: "Nancy White", id: "digital-marketing" },
  { name: "Data Science", instructor: "Henry Smiths", id: "data-science" },
  { name: "MERN Stack", instructor: "Henry Smiths", id: "mern-stack" },
  { name: "Web Development", instructor: "Charlotte", id: "web-development" },
  { name: "Brand Management", instructor: "Charlotte", id: "brand-management" },
  { name: "Project Management", instructor: "Jordan", id: "project-management" },
  { name: "Public Speaking", instructor: "Jordan", id: "public-speaking" },
  { name: "Business Analytics", instructor: "Ethan", id: "business-analytics" },
  { name: "3D Modeling & Animation", instructor: "Ethan", id: "3d-modeling" }
];

const instructorImages = {
  "Nancy White": nancy,
  "Henry Smiths": henry,
  "Charlotte": charlotte,
  "Jordan": jordan,
  "Ethan": ethan
};

const instructors = [...new Set(courseList.map(course => course.instructor))];

function Instructors() {
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-950">Meet Our Instructors</h1>

      <div className="flex flex-wrap justify-center gap-10">
        {instructors.map((instructor, index) => {
          const instructorCourses = courseList.filter(course => course.instructor === instructor);
          const instructorId = instructor.toLowerCase().replace(/\s+/g, "-");

          return (
            <div key={index} className="bg-white shadow-lg p-6 rounded-xl w-80 flex flex-col items-center transition transform hover:scale-105 hover:shadow-2xl">
              <img
                src={instructorImages[instructor] || "https://via.placeholder.com/150"}
                alt={instructor}
                className="w-32 h-32 rounded-full border-4 border-blue-900"
              />
              <h2 className="text-xl font-semibold mt-4 text-blue-950">{instructor}</h2>
              
              <h3 className="text-lg font-medium mt-4 text-gray-800">Courses:</h3>
              <ul className="list-disc pl-5 text-left text-gray-700">
                {instructorCourses.map((course, i) => (
                  <li key={i}>
                    <NavLink to={`/course/${course.id}`} className="text-blue-900 hover:text-blue-600 hover:underline">
                      {course.name}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <NavLink to={`/instructors/${instructorId}`} className="mt-6">
                <button className="bg-blue-900 text-white py-2 px-6 rounded-full hover:bg-indigo-700 transition duration-300 w-full">
                  View Profile
                </button>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Instructors;




