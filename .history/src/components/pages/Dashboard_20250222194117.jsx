import { FaUser, FaBook, FaHeart, FaTasks, FaMap, FaComments, FaEnvelope, FaCog, FaSignOutAlt } from "react-icons/fa";
import { courseList } from "./CourseDetail"; // Assuming you have courseList available
import rec from '../../assets/images/rec.png';
import tag from '../../assets/images/tag.png';
import Footer from '../Footer/Footer';

const Dashboard = ({ enrolledCourses }) => {
  const [activeSection, setActiveSection] = useState("My Profile");

  const sections = [
    { name: "My Profile", icon: <FaUser /> },
    { name: "My Courses", icon: <FaBook /> },
    { name: "Wishlist", icon: <FaHeart /> },
    { name: "Tasks", icon: <FaTasks /> },
    { name: "Courses Videos", icon: <FaMap /> },
    { name: "Feedback", icon: <FaComments /> },
    { name: "Messages", icon: <FaEnvelope /> },
  ];

  return (
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
          <button
            onClick={() => setActiveSection("Settings")}
            className={`flex items-center gap-3 p-3 rounded-lg w-full text-left transition-all duration-300 ${
              activeSection === "Settings" ? "bg-blue-700 text-white" : "hover:bg-blue-800 text-white"
            }`}
          >
            <FaCog />
            Settings
          </button>
          <button className="flex items-center gap-3 p-3 rounded-lg w-full text-left bg-red-600 hover:bg-red-700 text-white cursor-pointer transition-all duration-300">
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Active Section Content */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-6">{activeSection}</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* My Courses Section */}
            {activeSection === "My Courses" && enrolledCourses.length > 0 && (
              <div className="flex flex-wrap gap-6">
                {enrolledCourses.map((courseId) => {
                  const enrolledCourse = courseList.find((course) => course.id === courseId);
                  return (
                    <div key={courseId} className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-1/2 md:w-1/3">
                      <img
                        className="w-full h-56 object-cover"
                        src={enrolledCourse.image}
                        alt={enrolledCourse.name}
                      />
                      <div className="p-4">
                        <h2 className="mt-4 text-center bg-blue-500 text-white rounded py-2 w-full">
                          {enrolledCourse.name}
                        </h2>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            {activeSection === "My Courses" && enrolledCourses.length === 0 && (
              <p className="text-gray-600">You have not enrolled in any courses yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>

  );
};

export default Dashboard;













