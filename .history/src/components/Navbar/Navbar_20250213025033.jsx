import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex flex-row gap-10 mt-10 justify-start items-center">
       <NavLink to="/">Home</NavLink >
       <NavLink to="/dashboard">Dashboard</NavLink >
       <NavLink to="/instructors">Instructors</NavLink >
       <NavLink to="/about">AboutUs</NavLink >
       <NavLink to="/more">More</NavLink >
    </div>
  )
}

export default Navbar
