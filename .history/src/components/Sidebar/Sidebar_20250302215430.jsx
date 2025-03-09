import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../context/AuthContext"; // Import Auth Context
import { FaUser, FaBook, FaTasks, FaFileAlt, FaHeart, FaCommentDots, FaCogs, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const { logout } = useContext(AuthContext); // Get logout function

  // Menu items with corresponding icons
  const menuItems = [
    { name: "My Profile", path: "/profile", icon: <FaUser /> },
    { name: "My Courses", path: "/mycourses", icon: <FaBook /> },
    { name: "Tasks", path: "/tasks", icon: <FaTasks /> },
    { name: "Resources", path: "/resources", icon: <FaFileAlt /> },
    { name: "Wishlist", path: "/wishlist", icon: <FaHeart /> },
    { name: "Feedback", path: "/feedback", icon: <FaCommentDots /> },
    { name: "Messages", path: "/messages", icon: <FaCommentDots /> },
    { name: "Settings", path: "/settings", icon: <FaCogs /> },
  ];

  return (
    <div className="w-64 min-h-screen bg-white shadow-lg shadow-gray-400 text-black p-4">
      <h2 className="text-lg font-semibold mb-4">DASHBOARD</h2>
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className="w-full text-left p-2 rounded-lg hover:bg-gray-200 transition duration-200 flex items-center gap-4"
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Logout Button */}
      <button
        className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition duration-200"
        onClick={logout} // Call logout directly from AuthContext
      >
        <FaSignOutAlt className="inline mr-2" />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;




