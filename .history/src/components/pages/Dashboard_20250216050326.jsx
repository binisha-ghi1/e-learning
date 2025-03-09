import { useState } from "react";
import { 
  FaUser, FaBook, FaHeart, FaTasks, FaVideo, FaComments, 
  FaEnvelope, FaCog, FaSignOutAlt 
} from "react-icons/fa";

// Sample course details with videos
const courseDetails = [
  { id: 1, title: "Networking Basics", videoUrl: "https://www.youtube.com/embed/3QhU9jd03a0" },
  { id: 2, title: "Subnetting Explained", videoUrl: "https://www.youtube.com/embed/XMyA6NIFGUs" },
  { id: 3, title: "OSI Model Overview", videoUrl: "https://www.youtube.com/embed/IoITzUj0I7M" }
];

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("My Profile");

  const sections = [
    { name: "My Profile", icon: <FaUser /> },
    { name: "My Courses", icon: <FaBook /> },
    { name: "Wishlist", icon: <FaHeart /> },
    { name: "Tasks", icon: <FaTasks /> },
    { name: "Course Videos", icon: <FaVideo /> },
    { name: "Feedback", icon: <FaComments /> },
    { name: "Messages", icon: <FaEnvelope /> },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white flex flex-col justify-between p-6 shadow-lg">
        <div>
          <h1 className="text-2xl font-bold mb-6 text-center">Dashboard</h1>
          <nav className="space-y-4">
            {sections.map((section) => (
              <button
                key={section.name}
                onClick={() => setActiveSection(section.name)}
                className={`flex items-center gap-3 p-3 rounded-lg w-full text-left transition-all duration-300 ${
                  activeSection === section.name ? "bg-blue-700" : "hover:bg-blue-800"
                }`}
              >
                {section.icon}
                {section.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Settings & Logout */}
        <div className="space-y-4">
          <button
            onClick={() => setActiveSection("Settings")}
            className={`flex items-center gap-3 p-3 rounded-lg w-full text-left transition-all duration-300 ${
              activeSection === "Settings" ? "bg-blue-700" : "hover:bg-blue-800"
            }`}
          >
            <FaCog />
            Settings
          </button>
          <button
            className="flex items-center gap-3 p-3 rounded-lg w-full text-left bg-red-600 hover:bg-red-700 transition-all duration-300"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-10 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">{activeSection}</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          {activeSection === "Course Videos" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courseDetails.map((course) => (
                <div key={course.id} className="bg-gray-200 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                  <iframe
                    src={course.videoUrl}
                    title={course.title}
                    className="w-full h-48 rounded-lg"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">Content for <strong>{activeSection}</strong> will be displayed here.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



