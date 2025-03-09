import { Link } from "react-router-dom";
import { FaUser, FaBook, FaHeart } from "react-icons/fa"; // Add more icons as needed

const Sidebar = () => {
  return (
    <div className="w-64 bg-white text-blue-950 flex flex-col justify-between p-6 shadow-lg">
      <div>
        <h1 className="text-2xl font-bold mb-6 text-center">Dashboard</h1>
        <nav className="space-y-4">
          <Link to="/dashboard">
            <button className="flex items-center gap-3 p-3 rounded-lg w-full text-left hover:bg-blue-800 hover:text-white">
              <FaUser />
              My Profile
            </button>
          </Link>
          <Link to="/dashboard">
            <button className="flex items-center gap-3 p-3 rounded-lg w-full text-left hover:bg-blue-800 hover:text-white">
              <FaBook />
              My Courses
            </button>
          </Link>
          {/* Add more sections as needed */}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
