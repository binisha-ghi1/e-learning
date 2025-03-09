import React, { useState } from "react";
import { FaUser, FaBook, FaHeart, FaTasks, FaMap, FaComments, FaEnvelope, FaCog, FaSignOutAlt } from "react-icons/fa";

const Dashboard = ({ user, setUser }) => {
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

  const handleLogout = () => {
    setUser(null); // Logout by clearing the user data
  };

  return (
    <div className="flex h-screen mt-20 rounded-3xl">
      <div className="w-64 bg-white text-blue-950 flex flex-col justify-between p-6 shadow-blue-950 shadow-2xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Dashboard</h1>
        <nav className="space-y-4">
          {sections.map((section) => (
            <button
              key={section.name}
              onClick={() => setActiveSection(section.name)}
              className={`flex items-center gap-3 p-3 rounded-lg w-full text-left transition-all duration-300 ${activeSection === section.name ? "bg-blue-700 text-white" : "hover:bg-blue-800 hover:text-white"}`}
            >
              {section.icon}
              {section.name}
            </button>
          ))}
        </nav>
        <div className="space-y-4">
          <button onClick={() => setActiveSection("Settings")} className={`flex items-center gap-3 p-3 rounded-lg w-full text-left transition-all duration-300 ${activeSection === "Settings" ? "bg-blue-700" : "hover:bg-blue-800"}`}>
            <FaCog />
            Settings
          </button>
          <button onClick={handleLogout} className="flex items-center gap-3 p-3 rounded-lg w-full text-left bg-red-600 hover:bg-red-700 text-white cursor-pointer transition-all duration-300">
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </div>

      <div className="flex-1 p-10">
        <h2 className="text-3xl font-bold mb-6">{activeSection}</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          {activeSection === "My Profile" ? (
            <div>
              <h3 className="text-2xl font-semibold">Welcome, {user.name}!</h3>
              <p>Email: {user.email}</p>
              <p>Other details about the user...</p>
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











