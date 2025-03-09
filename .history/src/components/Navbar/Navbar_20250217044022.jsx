import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

function Navbar() {
  return (
    <nav className="flex bg-yellow-400 text-xl sticky top-0 font-oswald gap-5 p-5 items-center shadow-md">
      <p className="font-mono pr-4 text-lg">S.T.Tech</p>
      {[
        "Home",
        "Dashboard",
        "Courses",
        "Instructors",
        "AboutUs",
        "Contact",
        "More",
      ].map((item) => (
        <NavLink
          key={item}
          to={`/${item.toLowerCase()}`}
          className="hover:text-blue-600 transition"
        >
          {item}
        </NavLink>
      ))}
      <div className="ml-auto flex gap-4">
        <NavLink to="/signup" className="px-4 py-2 bg-green-600 text-white rounded-lg">
          Signup
        </NavLink>
        <NavLink to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          Login
        </NavLink>
        <NavLink to="/cartpage" className="text-white bg-red-600 p-2 rounded-full">
          <IoCartOutline className="text-2xl" />
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
