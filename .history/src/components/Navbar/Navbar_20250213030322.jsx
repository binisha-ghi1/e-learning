import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex flex-row bg-yellow-500 text-xl gap-5 pt-10 justify-start items-start pl-15">
       <NavLink to="/">Home</NavLink >
       <NavLink to="/dashboard">Dashboard</NavLink >
       <NavLink to="/courses">Dashboard</NavLink >
       <NavLink to="/instructors">Instructors</NavLink >
       <NavLink to="/about">AboutUs</NavLink >
       <NavLink to="/more">More</NavLink >
    </div>
  )
}

export default Navbar
