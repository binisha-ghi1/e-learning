import { useParams, Link } from "react-router-dom";

// Sample instructor images (Replace with actual URLs)
// import nancyWhite from "../../assets/images/nancy-white.jpg";
// import henrySmiths from "../../assets/images/henry-smiths.jpg";

// Sample instructor data
const instructors = {
  "nancy-white": {
    name: "Nancy White",
    image: nancyWhite,
    bio: "An expert in UI/UX and Graphic Design with 10+ years of experience.",
    rating: 4.8,
    courses: [
      { id: "ui-ux", name: "UI/UX Design" },
      { id: "graphic-design", name: "Graphic Design" }
    ]
  },
  "henry-smiths": {
    name: "Henry Smiths",
    image: henrySmiths,
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
    <div className="p-8">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
        {/* Instructor Image */}
        <img src={instructor.image} alt={instructor.name} className="w-32 h-32 rounded-full" />
        
        {/* Name & Rating */}
        <h1 className="text-3xl font-bold mt-4">{instructor.name}</h1>
        <p className="text-yellow-500 text-xl font-semibold">⭐ {instructor.rating} / 5</p>

        {/* Bio */}
        <p className="mt-4 text-gray-700 text-center">{instructor.bio}</p>

        {/* Courses Taught */}
        <h2 className="text-2xl font-semibold mt-6">Courses Taught</h2>
        <ul className="list-disc mt-2">
          {instructor.courses.map((course, index) => (
            <li key={index}>
              <Link to={`/courses/${course.id}`} className="text-blue-900 hover:underline">
                {course.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InstructorDetail;
