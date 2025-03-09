import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar";
import DashboardHome from "./components/Dashboard/DashboardHome";
import Courses from "./components/Dashboard/Courses";
import Wishlist from "./components/Dashboard/Wishlist";
import Tasks from "./components/Dashboard/Tasks";
import CourseVideos from "./components/Dashboard/CourseVideos";
import Feedback from "./components/Dashboard/Feedback";
import Messages from "./components/Dashboard/Messages";
import Settings from "./components/Dashboard/Settings";

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












