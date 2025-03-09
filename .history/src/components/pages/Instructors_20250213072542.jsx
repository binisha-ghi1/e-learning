import { Link } from "react-router-dom";

// Sample instructor images (replace with actual URLs)
// import nancyWhite from "../../assets/images/nancy-white.jpg";
// import henrySmiths from "../../assets/images/henry-smiths.jpg";

const courseList = [
  { 
    name: "UI/UX Design", 
    instructor: "Nancy White", 
    id: "ui-ux"
  },
  { 
    name: "GRAPHIC DESIGN", 
    instructor: "Nancy White", 
    id: "graphic-design"
  },
  { 
    name: "DATA SCIENCE", 
    instructor: "Henry Smiths", 
    id: "data-science"
  },
  { 
    name: "MERN STACK", 
    instructor: "Henry Smiths", 
    id: "mern-stack"
  }
];

// Map instructor names to their images (replace with actual instructor images)
const instructorImages = {
  "Nancy White": nancyWhite,
  "Henry Smiths": henrySmiths
};

// Extract unique instructors
const instructors = [...new Set(courseList.map(course => course.instructor))];

function Instructors() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Meet Our Instructors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {instructors.map((instructor, index) => {
          const instructorCourses = courseList.filter(course => course.instructor === instructor);

          return (
            <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
              {/* Instructor Image */}
              <img
                src={instructorImages[instructor] || "https://via.placeholder.com/150"} 
                alt={instructor}
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h2 className="text-xl font-semibold text-center mt-4">{instructor}</h2>
              
              <h3 className="text-lg font-medium mt-4">Courses:</h3>
              <ul className="list-disc pl-5">
                {instructorCourses.map((course, i) => (
                  <li key={i}>
                    <Link to={`/courses/${course.id}`} className="text-indigo-600 hover:underline">
                      {course.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Instructors;

