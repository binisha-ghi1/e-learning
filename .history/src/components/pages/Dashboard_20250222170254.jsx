import { useState } from "react";
import { FaUserCircle, FaBookOpen, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
        <h1 className="text-xl font-bold">E-Learning</h1>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/dashboard"
              className={`hover:underline ${
                activeTab === "dashboard" ? "font-bold" : ""
              }`}
              onClick={() => setActiveTab("dashboard")}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={`hover:underline ${
                activeTab === "courses" ? "font-bold" : ""
              }`}
              onClick={() => setActiveTab("courses")}
            >
              My Courses
            </NavLink>
          </li>
          <li>
            <FaUserCircle className="text-2xl cursor-pointer" />
          </li>
        </ul>
      </nav>

      {/* Dashboard Content */}
      <div className="p-6">
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











