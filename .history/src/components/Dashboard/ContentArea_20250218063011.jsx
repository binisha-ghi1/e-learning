import CourseVideos from "./CourseVideos";
import MyProfile from "./MyProfile";
import MyCourses from "./MyCourses";
import Wishlist from "./Wishlist";
import Tasks from "./Tasks";
import Feedback from "./Feedback";
import Messages from "./Messages";
import Settings from "./Settings";

const ContentArea = ({ activeSection, courseList }) => {
  const renderSection = () => {
    switch (activeSection) {
      case "My Profile":
        return <MyProfile />;
      case "My Courses":
        return <MyCourses />;
      case "Wishlist":
        return <Wishlist />;
      case "Tasks":
        return <Tasks />;
      case "Courses Videos":
        return <CourseVideos courseList={courseList} />;
      case "Feedback":
        return <Feedback />;
      case "Messages":
        return <Messages />;
      case "Settings":
        return <Settings />;
      default:
        return <p className="text-gray-600">Select a section to view content.</p>;
    }
  };

  return (
    <div className="flex-1 p-10">
      <h2 className="text-3xl font-bold mb-6">{activeSection}</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {renderSection()}
      </div>
    </div>
  );
};

export default ContentArea;