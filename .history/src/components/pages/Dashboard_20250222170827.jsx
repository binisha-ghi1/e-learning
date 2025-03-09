import { useState } from "react";
import { FaUserCircle, FaBookOpen, FaSignOutAlt, FaHome, FaTasks, FaHeart, FaEnvelope, FaCog } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white p-6 space-y-6">
        <h1 className="text-xl font-bold">E-Learning</h1>
        <ul className="space-y-4">
          <li>
            <NavLink to="/dashboard" className={`flex items-center space-x-2 ${activeTab === "dashboard" ? "font-bold" : ""}`} onClick={() => setActiveTab("dashboard")}>
              <FaHome /> <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" className={`flex items-center space-x-2 ${activeTab === "courses" ? "font-bold" : ""}`} onClick={() => setActiveTab("courses")}>
              <FaBookOpen /> <span>My Courses</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/tasks" className="flex items-center space-x-2">
              <FaTasks /> <span>Tasks</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/wishlist" className="flex items-center space-x-2">
              <FaHeart /> <span>Wishlist</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/messages" className="flex items-center space-x-2">
              <FaEnvelope /> <span>Messages</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className="flex items-center space-x-2">
              <FaCog /> <span>Settings</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/logout" className="flex items-center space-x-2">
              <FaSignOutAlt /> <span>Log Out</span>
            </NavLink>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold">Welcome back, User!</h2>
          <p className="text-gray-600 mt-2">Track your courses and progress.</p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-500 text-white p-4 rounded-lg flex flex-col items-center">
              <FaBookOpen className="text-3xl" />
              <p className="mt-2">Enrolled Courses: 3</p>
            </div>
            <div className="bg-green-500 text-white p-4 rounded-lg flex flex-col items-center">
              <FaBookOpen className="text-3xl" />
              <p className="mt-2">Active Courses: 2</p>
            </div>
            <div className="bg-yellow-500 text-white p-4 rounded-lg flex flex-col items-center">
              <FaBookOpen className="text-3xl" />
              <p className="mt-2">Completed Courses: 1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}











