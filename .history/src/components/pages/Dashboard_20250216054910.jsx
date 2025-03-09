import { useState } from "react";
import { 
  FaUser, FaBook, FaHeart, FaTasks, FaMap, FaComments, 
  FaEnvelope, FaCog, FaSignOutAlt 
} from "react-icons/fa";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("My Profile");

  const sections = [
    { name: "My Profile", icon: <FaUser /> },
    { name: "My Courses", icon: <FaBook /> },
    { name: "Wishlist", icon: <FaHeart /> },
    { name: "Tasks", icon: <FaTasks /> },
    { name: "Courses", icon: <FaMap /> }, // Updated name
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
          <p className="text-gray-600">Content for <strong>{activeSection}</strong> will be displayed here.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;









