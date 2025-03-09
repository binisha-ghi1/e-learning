import React from 'react'

const Navbar = () => {
  return (
    <div>
       <NavLink to="/">Home</NavLink >
       <NavLink to="/dashboard">Dashboard</NavLink >
       <NavLink to="/">Instructors</NavLink >
       <NavLink to="/">AboutUs</NavLink >
       <NavLink to="/">More</NavLink >
    </div>
  )
}

export default Navbar
