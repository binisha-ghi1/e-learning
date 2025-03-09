import { useState } from "react";
import { 
  FaUser, FaBook, FaHeart, FaTasks, FaMap, FaComments, 
  FaEnvelope, FaCog, FaSignOutAlt 
} from "react-icons/fa";
import { courseList } from "./CourseDetail"; // Import courseList for courses info

// Function to extract YouTube video ID
const getYouTubeVideoId = (url) => {
  try {
    const videoId = new URL(url).searchParams.get("v");
    return videoId;
  } catch (error) {
    console.error("Invalid video URL:", url);
    return null;
  }
};

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("My Profile");

  const sections = [
    { name: "My Profile", icon: <FaUser /> },
    { name: "My Courses", icon: <FaBook /> },
    { name: "Wishlist", icon: <FaHeart /> },
    { name: "Tasks", icon: <FaTasks /> },
    { name: "Courses Videos", icon: <FaMap /> }, // Updated name
    { name: "Feedback", icon: <FaComments /> },
    { name: "Messages", icon: <FaEnvelope /> },
  ];

  return (
    <div className="flex h-screen rounded-3xl">
      {/* Sidebar */}
      <div className="w-64 bg-white text-blue-950 flex flex-col justify-between p-6  shadow-lg">
        <div >
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
      <div className="flex-1 p-10 bg-gray-200 h">
        <h2 className="text-3xl font-bold mb-6">{activeSection}</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Check if the active section is "Courses Videos" */}
          {activeSection === "Courses Videos" ? (
            <div className='flex flex-wrap gap-15'>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                {courseList.map((course, index) => {
                  const videoId = getYouTubeVideoId(course.video);

                  return (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                      <img
                        className="w-full h-56 object-cover"
                        src={course.image}
                        alt={course.name}
                      />
                      <div className="p-4">
                        <h2 className="mt-4 block text-center bg-blue-500 text-white rounded py-2 w-full">{course.name}</h2>

                        {/* Video Embedding */}
                        {videoId ? (
                          <iframe
                            className="mt-4 w-full h-32"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title={course.name}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        ) : (
                          <p className="text-red-500 mt-4">No video available for this course.</p>
                        )}

                      
                      </div>
                    </div>
                  );
                })}
              </div>
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










