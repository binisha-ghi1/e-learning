import { FaUser, FaBook, FaHeart, FaTasks, FaVideo, FaComments, FaEnvelope, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const sections = [
    { name: "My Profile", icon: <FaUser /> },
    { name: "My Courses", icon: <FaBook /> },
    { name: "Wishlist", icon: <FaHeart /> },
    { name: "Tasks", icon: <FaTasks /> },
    { name: "Courses Videos", icon: <FaVideo /> }, // 🎥 Video icon instead of map
    { name: "Feedback", icon: <FaComments /> },
    { name: "Messages", icon: <FaEnvelope /> },
    { name: "Settings", icon: <FaCog /> }, // ⚙️ Added Settings
    { name: "Logout", icon: <FaSignOutAlt />, className: "text-red-500" }, // 🔴 Added Logout
  ];

  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-4 flex flex-col justify-between">
      {/* Sidebar Sections */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
        <ul>
          {sections.map((section, index) => (
            <li
              key={index}
              className={`flex items-center gap-2 p-2 hover:bg-gray-700 rounded cursor-pointer ${section.className || ""}`}
            >
              {section.icon}
              <span>{section.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;


