import React from 'react'
import AboutUs from './components/pages/AboutUs'
import Home from './components/pages/Home'
import Dashboard from './components/pages/Dashboard'
import Instructors from './components/pages/Instructors'
import More from './components/pages/More'

const App = () => {
  return (
    <div>
      <Home/>
      <Dashboard/>
      <Instructors/>
      <AboutUs/>
      <More/>
    </div>
  )
}

export default App

