import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MyProfile from './sections/MyProfile';
import EnrolledCourses from './sections/EnrolledCourses';
import WishlistContent from './sections/WishlistContent';
import TasksContent from './sections/TasksContent';
import CoursesVideos from './sections/CoursesVideos';
import Feedback from './sections/Feedback';
import Messages from './sections/Messages';
import Settings from './sections/Settings';
import Logout from './sections/Logout';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("My Profile");
  
  const renderContent = () => {
    switch (activeSection) {
      case "My Profile": return <MyProfile />;
      case "My Courses": return <EnrolledCourses />;
      case "Wishlist": return <WishlistContent />;
      case "Tasks": return <TasksContent />;
      case "Courses Videos": return <CoursesVideos />;
      case "Feedback": return <Feedback />;
      case "Messages": return <Messages />;
      case "Settings": return <Settings />;
      case "Logout": return <Logout />;
      default: return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar onSectionChange={setActiveSection} activeSection={activeSection} />
      <div className="flex-1 p-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;