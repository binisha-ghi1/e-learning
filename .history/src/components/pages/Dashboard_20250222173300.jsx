import { useState } from "react";
import { FaUserCircle, FaBookOpen, FaSignOutAlt, FaHome, FaTasks, FaHeart, FaEnvelope, FaCog, FaVideo } from "react-icons/fa";
import { courseList } from "./Courses"; 

const getYouTubeVideoId = (url) => {
  try {
    const videoId = new URL(url).searchParams.get("v");
    return videoId;
  } catch (error) {
    console.error("Invalid video URL:", url);
    return null;
  }
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white p-6 space-y-6">
        <h1 className="text-xl font-bold">E-Learning</h1>
        <ul className="space-y-4">
          <li>
            <button onClick={() => setActiveTab("dashboard")} className={`flex items-center space-x-2 w-full text-left ${activeTab === "dashboard" ? "font-bold" : ""}`}>
              <FaHome /> <span>Dashboard</span>
            </button>
          </li>
          <li>
            <button onClick={() => setActiveTab("courses")} className={`flex items-center space-x-2 w-full text-left ${activeTab === "courses" ? "font-bold" : ""}`}>
              <FaBookOpen /> <span>My Courses</span>
            </button>
          </li>
          <li>
            <button onClick={() => setActiveTab("videos")} className="flex items-center space-x-2 w-full text-left">
              <FaVideo /> <span>Course Videos</span>
            </button>
          </li>
          <li>
            <button onClick={() => setActiveTab("tasks")} className="flex items-center space-x-2 w-full text-left">
              <FaTasks /> <span>Tasks</span>
            </button>
          </li>
          <li>
            <button onClick={() => setActiveTab("wishlist")} className="flex items-center space-x-2 w-full text-left">
              <FaHeart /> <span>Wishlist</span>
            </button>
          </li>
          <li>
            <button onClick={() => setActiveTab("messages")} className="flex items-center space-x-2 w-full text-left">
              <FaEnvelope /> <span>Messages</span>
            </button>
          </li>
          <li>
            <button onClick={() => setActiveTab("settings")} className="flex items-center space-x-2 w-full text-left">
              <FaCog /> <span>Settings</span>
            </button>
          </li>
          <li>
            <button className="flex items-center space-x-2 w-full text-left">
              <FaSignOutAlt /> <span>Log Out</span>
            </button>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          {activeTab === "dashboard" && (
            <>
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
            </>
          )}

          {activeTab === "videos" && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold">Course Videos</h3>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {courseList.map((course, index) => {
                  const videoId = getYouTubeVideoId(course.video);
                  return (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                      <img className="w-full h-56 object-cover" src={course.image} alt={course.name} />
                      <div className="p-4">
                        <h2 className="mt-4 text-center bg-blue-500 text-white rounded py-2 w-full">{course.name}</h2>
                        {videoId ? (
                          <iframe className="mt-4 w-full h-32" src={`https://www.youtube.com/embed/${videoId}`} title={course.name} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        ) : (
                          <p className="text-red-500 mt-4">No video available for this course.</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}












