import { NavLink } from "react-router-dom"
import logo from '../../assets/images/logo.png'

const Navbar = () => {
  return (
    <div className="flex flex-row bg-yellow-400 text-xl gap-5 pt-10 justify-start items-start pl-15">
      <img src={logo} alt="" className="pb-1" /> <p className="font-mono italic pr-2">S.T.Tech</p>
       <NavLink to="/">Home</NavLink >
       <NavLink to="/dashboard">Dashboard</NavLink >
       <NavLink to="/courses">Courses</NavLink >
       <NavLink to="/instructors">Instructors</NavLink >
       <NavLink to="/about">AboutUs</NavLink >
       <NavLink to="/contact">Contact</NavLink >
       <NavLink to="/more">More</NavLink >
    </div>
  )
}

export default Navbar
