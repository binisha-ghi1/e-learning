import React, { useState } from 'react';
import AboutUs from './components/pages/AboutUs';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import Courses from './components/pages/Courses';
import CourseDetail from './components/pages/CourseDetail';
import Instructors from './components/pages/Instructors';
import InstructorsDetail from './components/pages/InstructorDetail';
import More from './components/pages/More';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Contact from './components/pages/Contact';
import Login from './components/Authenication/Login';
import Signup from './components/Authenication/Signup';
import Cartpage from './components/pages/Cartpage';

const App = () => {
  const [cart, setCart] = useState([]); // Initialize the cart state

  return (
    <div>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:courseId" element={<CourseDetail />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/instructors/:id" element={<InstructorsDetail />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/more" element={<More />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cartpage cart={cart} setCart={setCart} />} />
      </Routes>
    </div>
  );
};

export default App;


