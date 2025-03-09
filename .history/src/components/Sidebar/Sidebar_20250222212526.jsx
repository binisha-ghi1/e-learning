import { FaUser, FaBook, FaHeart, FaTasks, FaVideo, FaComments, FaEnvelope } from "react-icons/fa";

const Sidebar = () => {
  const sections = [
    { name: "My Profile", icon: <FaUser /> },
    { name: "My Courses", icon: <FaBook /> },
    { name: "Wishlist", icon: <FaHeart /> },
    { name: "Tasks", icon: <FaTasks /> },
    { name: "Courses Videos", icon: <FaVideo /> },  
    { name: "Feedback", icon: <FaComments /> },
    { name: "Messages", icon: <FaEnvelope /> },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
      <ul>
        {sections.map((section, index) => (
          <li key={index} className="flex items-center cursor-pointer gap-2 p-2 hover:bg-gray-700 rounded">
            {section.icon}
            <span>{section.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

