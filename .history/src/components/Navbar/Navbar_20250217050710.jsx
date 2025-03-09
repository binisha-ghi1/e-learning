import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import { FiShoppingCart } from "react-icons/fi";

const Navbar = ({ cart }) => {
  return (
    <div className="flex flex-row bg-yellow-400 text-xl sticky font-oswald gap-5 pt-10 justify-start items-start pl-15">
      <img src={logo} alt="" className="pb-1" /> <p className="font-mono pr-2">S.T.Tech</p>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/courses">Courses</NavLink>
      <NavLink to="/instructors">Instructors</NavLink>
      <NavLink to="/about">AboutUs</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/more">More</NavLink>
      <NavLink to="/signup">Signup</NavLink>
      <NavLink to="/login">Login</NavLink>

      <div className="flex px-5 gap-x-5 items-center">
        <NavLink to="/cart">
          <span className="relative">
            <FiShoppingCart className="text-black text-2xl w-8 h-6" />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 text-xs text-white bg-red-500 rounded-full w-5 h-5 flex justify-center items-center">
                {cart.length}
              </span>
            )}
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

