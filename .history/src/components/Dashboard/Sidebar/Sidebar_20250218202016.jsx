import { FaUser, FaBook, FaHeart, FaTasks, FaMap, FaComments, FaEnvelope, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = ({ activeSection, setActiveSection }) => {
  const sections = [
    { name: "My Profile", icon: <FaUser /> },
    { name: "My Courses", icon: <FaBook /> },
    { name: "Wishlist", icon: <FaHeart /> },
    { name: "Tasks", icon: <FaTasks /> },
    { name: "Courses Videos", icon: <FaMap /> },
    { name: "Feedback", icon: <FaComments /> },
    { name: "Messages", icon: <FaEnvelope /> },
  ];

  return (
    <div className="w-64 bg-white text-blue-950 flex flex-col justify-between p-6 shadow-lg">
      <div>
        <h1 className="text-2xl font-bold mb-6 text-center">Dashboard</h1>
        <nav className="space-y-4">
          {sections.map((section) => (
            <button
              key={section.name}
              onClick={() => setActiveSection(section.name)}
              className={`flex items-center gap-3 p-3 rounded-lg w-full text-left transition-all duration-300 ${
                activeSection === section.name ? "bg-blue-700 text-white" : "hover:bg-blue-800 hover:text-white"
              }`}
            >
              {section.icon}
              {section.name}
            </button>
          ))}
        </nav>
      </div>
      <div className="space-y-4 mt-auto">
        <button
          onClick={() => setActiveSection("Settings")}
          className={`flex items-center gap-3 p-3 rounded-lg w-full text-left transition-all duration-300 ${
            activeSection === "Settings" ? "bg-blue-700 text-white" : "hover:bg-blue-800 text-white"
          }`}
        >
          <FaCog />
          Settings
        </button>
        <button className="flex items-center gap-3 p-3 rounded-lg w-full text-left bg-red-600 hover:bg-red-700 text-white cursor-pointer transition-all duration-300">
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

// Individual Sidebar Section Components
const MyProfile = () => <div>Welcome to your Profile</div>;
const MyCourses = () => <div>Your Courses</div>;
const Wishlist = () => <div>Your Wishlist</div>;
const Tasks = () => <div>Your Tasks</div>;
const CourseVideos = () => <div>Your Course Videos</div>;
const Feedback = () => <div>Feedback Section</div>;
const Messages = () => <div>Messages</div>;
const Settings = () => <div>Settings</div>;

export { MyProfile, MyCourses, Wishlist, Tasks, CourseVideos, Feedback, Messages, Settings };
