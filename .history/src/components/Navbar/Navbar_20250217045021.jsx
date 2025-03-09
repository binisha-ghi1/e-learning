import { NavLink } from "react-router-dom"
import logo from '../../assets/images/logo.png'
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex flex-row bg-yellow-400 text-xl sticky font-oswald gap-5 pt-10 justify-start items-start pl-15">
      <img src={logo} alt="" className="pb-1" /> <p className="font-mono pr-2">S.T.Tech</p>
       <NavLink to="/">Home</NavLink >
       <NavLink to="/dashboard">Dashboard</NavLink >
       <NavLink to="/courses">Courses</NavLink >
       <NavLink to="/instructors">Instructors</NavLink >
       <NavLink to="/about">AboutUs</NavLink >
       <NavLink to="/contact">Contact</NavLink >
       <NavLink to="/more">More</NavLink >
       <NavLink to="/signup">Signup</NavLink >
       <NavLink to="/login">Login</NavLink >
      
       <div className=" flex  px-5 gap-x-5   items-center">
      <NavLink to="/cart">
      <span>
      <FiShoppingCart className=" text-black relative   text-2xl   w-8 h-6" />
      </span>
      <span className="text-orange-600 absolute top-2 w-6 right-88 text-lg "> {totalItems}</span>
      </NavLink>
       
    </div>
  )
}

export default Navbar
