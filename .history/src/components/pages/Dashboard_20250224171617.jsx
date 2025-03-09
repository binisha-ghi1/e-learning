import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaUser, FaBook, FaHeart, FaTasks, FaVideo, FaComments, FaEnvelope, FaCog, FaSignOutAlt } from "react-icons/fa";
import MyProfile from "./MyProfile";
import MyCourses from "./MyCourses";
import Footer from "../Footer/Footer";

const Dashboard = () => {
  const sections = [
    { name: "My Profile", path: "/profile", icon: <FaUser /> },
    { name: "My Courses", path: "/courses", icon: <FaBook /> },
    { name: "Wishlist", path: "#", icon: <FaHeart /> },
    { name: "Tasks", path: "#", icon: <FaTasks /> },
    { name: "Courses Videos", path: "#", icon: <FaVideo /> },
    { name: "Feedback", path: "#", icon: <FaComments /> },
    { name: "Messages", path: "#", icon: <FaEnvelope /> },
  ];

  return (
    <Router>
      <div className="flex h-screen mt-20 rounded-3xl">
        <div className="w-64 bg-white text-blue-950 flex flex-col justify-between p-6 shadow-lg">
          <div>
            <h1 className="text-2xl font-bold mb-6 text-center">Dashboard</h1>
            <nav className="space-y-4">
              {sections.map((section) => (
                <NavLink
                  key={section.name}
                  to={section.path}
                  className="flex items-center gap-3 p-3 rounded-lg w-full text-left transition-all duration-300 hover:bg-blue-800 hover:text-white"
                >
                  {section.icon}
                  {section.name}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className="space-y-4 mt-auto">
            <button className="flex items-center gap-3 p-3 rounded-lg w-full text-left bg-red-600 hover:bg-red-700 text-white cursor-pointer transition-all duration-300">
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>

        <div className="flex-1 p-6 overflow-auto">
          <Routes>
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/courses" element={<MyCourses />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default Dashboard;



















