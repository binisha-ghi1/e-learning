import React from 'react'
import AboutUs from './components/pages/AboutUs'
import Home from './components/pages/Home'
import Dashboard from './components/pages/Dashboard'
import Courses from './components/pages/Courses'
import Instructors from './components/pages/Instructors'
import More from './components/pages/More'
import Navbar from './components/Navbar/Navbar'
import { Routes , Route } from 'react-router-dom'

import { NavLink } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element= {<Dashboard/>} />
      <Route path="/courses" element= {<Courses/>} />
      <Route path="/instructors" element= {<Instructors/>} />
      <Route path="/about" element= {<AboutUs/>} />
      <Route path="/more" element= {<More/>} />
      </Routes>
    </div>
  )
}

export default App

