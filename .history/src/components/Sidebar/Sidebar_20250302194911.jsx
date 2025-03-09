import React from "react";
import { FaUser, FaBook, FaTasks, FaFileAlt, FaHeart, FaCommentDots, FaCogs, FaSignOutAlt } from "react-icons/fa";

const Sidebar = ({ userLoggedIn, onLogout }) => {
  return (
    <div className="w-64 min-h-screen bg-white shadow-lg shadow-gray-400 text-black p-4">
      <h2 className="text-lg font-semibold mb-4">DASHBOARD</h2>
      <ul className="space-y-2">
        {userLoggedIn ? (
          // Menu items only appear when logged in
          <>
            <li>
              <button className="w-full text-left p-2 rounded-lg hover:bg-gray-200 transition duration-200 flex items-center gap-4">
                <FaUser /> My Profile
              </button>
            </li>
            <li>
              <button className="w-full text-left p-2 rounded-lg hover:bg-gray-200 transition duration-200 flex items-center gap-4">
                <FaBook /> My Courses
              </button>
            </li>
            {/* Add other menu items here */}
          </>
        ) : (
          <li>
            <button className="w-full text-left p-2 rounded-lg hover:bg-gray-200 transition duration-200 flex items-center gap-4">
              <FaSignOutAlt /> Please Log in
            </button>
          </li>
        )}
      </ul>

      {userLoggedIn && (
        <button
          className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition duration-200"
          onClick={onLogout}
        >
          <FaSignOutAlt className="inline mr-2" />
          Logout
        </button>
      )}
    </div>
  );
};

export default Sidebar;


