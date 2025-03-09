import React from 'react'

const Navbar = () => {
  return (
    <div>
       <NavLink to="/">Home</NavLink >
       <NavLink to="/dashboard">Dashboard</NavLink >
       <NavLink to="/instructors">Instructors</NavLink >
       <NavLink to="/about">AboutUs</NavLink >
       <NavLink to="/">More</NavLink >
    </div>
  )
}

export default Navbar
