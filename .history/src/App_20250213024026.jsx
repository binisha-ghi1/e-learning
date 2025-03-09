import React from 'react'
import AboutUs from './components/pages/AboutUs'
import Home from './components/pages/Home'
import Dashboard from './components/pages/Dashboard'
import Instructors from './components/pages/Instructors'
import More from './components/pages/More'
import Navbar from './components/Navbar/Navbar'
import { Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Home/>
      <Dashboard/>
      <Instructors/>
      <AboutUs/>
      <More/>
      v
    </div>
  )
}

export default App

