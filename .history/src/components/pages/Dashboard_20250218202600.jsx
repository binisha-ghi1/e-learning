import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Dashboard/Sidebar/Sidebar";
import DashboardHome from "./components/Dashboard/Sidebar/MyProfile";
import Courses from "./components/Dashboard/Sidebar/MyCourses";
import Wishlist from "./components/Dashboard/Sidebar/Wishlist";
import Tasks from "./components/Dashboard/Sidebar/Tasks";
import CourseVideos from "./components/Dashboard/Sidebar/CourseVideos";
import Feedback from "./components/Dashboard/Sidebar/Feedback";
import Messages from "./components/Dashboard/Sidebar/Messages";
import Settings from "./components/Dashboard/Sidebar/Settings";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("My Profile");

  return (
    <div className="flex h-screen mt-20 rounded-3xl">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="flex-1 p-6 overflow-auto">
        {activeSection === "My Profile" && <DashboardHome />}
        {activeSection === "My Courses" && <Courses />}
        {activeSection === "Wishlist" && <Wishlist />}
        {activeSection === "Tasks" && <Tasks />}
        {activeSection === "Courses Videos" && <CourseVideos />}
        {activeSection === "Feedback" && <Feedback />}
        {activeSection === "Messages" && <Messages />}
        {activeSection === "Settings" && <Settings />}
      </div>
    </div>
  );
};

export default Dashboard;










