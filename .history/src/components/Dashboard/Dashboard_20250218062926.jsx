import { useState } from "react";
import Sidebar from "./Sidebar";
import ContentArea from "./ContentArea";
import { courseList } from "./CourseDetail";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("My Profile");

  return (
    <div className="flex h-screen mt-20 rounded-3xl">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <ContentArea activeSection={activeSection} courseList={courseList} />
    </div>
  );
};

export default Dashboard;