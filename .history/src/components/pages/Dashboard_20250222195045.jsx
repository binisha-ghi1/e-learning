import { useState } from "react";
import { FaUser, FaBook, FaHeart, FaTasks, FaMap, FaComments, FaEnvelope, FaCog, FaSignOutAlt } from "react-icons/fa";
import { courseList } from "./courseData";
import { useCourseContext } from './CourseContext';
import rec from '../../assets/images/rec.png';
import tag from '../../assets/images/tag.png';
import Footer from '../Footer/Footer';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("My Profile");
  const { enrolledCourses } = useCourseContext();

  const sections = [
    { name: "My Profile", icon: <FaUser /> },
    { name: "My Courses", icon: <FaBook /> },
    { name: "Wishlist", icon: <FaHeart /> },
    { name: "Tasks", icon: <FaTasks /> },
    { name: "Courses Videos", icon: <FaMap /> },
    { name: "Feedback", icon: <FaComments /> },
    { name: "Messages", icon: <FaEnvelope /> },
  ];

  const getEnrolledCourses = () => {
    return courseList.filter(course => enrolledCourses.includes(course.id));
  };

  return (
    <div>
      <div className="flex h-screen mt-20 rounded-3xl">
        {/* Sidebar */}
        <div className="w-64 bg-white text-blue-950 flex flex-col justify-between p-6 shadow-lg">
          <div>
            <h1 className="text-2xl font-bold mb-6 text-center">Dashboard</h1>
            <nav className="space-y-4">
              {sections.map((section) => (
                <button
                  key={section.name}
                  onClick={() => setActiveSection(section.name)}
                  className={`flex items-center gap-3 p-3 rounded-lg w-full text-left transition-all duration-300 ${
                    activeSection === section.name ? "bg-blue-700 text-white" : "hover:bg-blue-800 hover:text-white"
                  }`}
                >
                  {section.icon}
                  {section.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-4 mt-auto">
            <button className="flex items-center gap-3 p-3 rounded-lg w-full text-left hover:bg-blue-800 hover:text-white">
              <FaCog />
              Settings
            </button>
            <button className="flex items-center gap-3 p-3 rounded-lg w-full text-left bg-red-600 hover:bg-red-700 text-white">
              <FaSignOutAlt />
              Logout
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 overflow-auto">
          {/* My Profile Section */}
          {activeSection === "My Profile" && (
            <div
              className="min-w-fit rounded-2xl flex flex-col items-start justify-start bg-cover bg-center px-6 text-white"
              style={{ backgroundImage: `url(${rec})` }}
            >
              <h2 className="text-3xl font-bold pt-6 mb-6">Welcome back, Name</h2>
              <p className="text-start mb-6">
                We're excited to have you here. Dive into your learning journey<br /> and make progress
                toward your goals.
              </p>
              <div className="mb-6">
                <img src="https://via.placeholder.com/150" alt="User Profile" className="rounded-full w-32 h-32 border-4 border-white" />
              </div>
              <img src={tag} alt="Tag" className="absolute bottom-70 right-30 w-62" />
            </div>
          )}

          {/* My Courses Section */}
          {activeSection === "My Courses" && (
            <div className="mt-10">
              <h2 className="text-3xl font-bold mb-6">My Enrolled Courses</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {getEnrolledCourses().map((course) => (
                  <div key={course.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-center">{course.name}</h3>
                      <p className="text-gray-600 mt-2">{course.description}</p>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-blue-600">Duration: {course.duration}</span>
                        <span className="text-green-600">₹{course.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
                {enrolledCourses.length === 0 && (
                  <p className="text-gray-600 col-span-3 text-center">
                    You haven't enrolled in any courses yet.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Other sections remain the same */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;











