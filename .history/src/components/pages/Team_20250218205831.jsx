import React from 'react'

const Team = () => {
  return (
    <div>
      Our Team
      <div>
      import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AboutUs from './components/pages/AboutUs';
import Home from './components/pages/Home';
import Dashboard from './components/dashboard/Dashboard'; 
import Courses from './components/pages/Courses';
import CourseDetail from './components/pages/CourseDetail';
import Instructors from './components/pages/Instructors';
import InstructorDetail from './components/pages/InstructorDetail';
import More from './components/pages/More';
import Contact from './components/pages/Contact';
import Login from './components/Authenication/Login';
import Signup from './components/Authenication/Signup';
import CartPage from './components/pages/CartPage';
import Payment from './components/pages/Payment';
import Failure from './components/pages/Failure';
import Success from './components/pages/Success';
import MyProfile from './components/dashboard/MyProfile';

const App = () => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null); // Initially, the user can be null

  return (
    <div>
      <Navbar cart={cart} user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/profile" element={<MyProfile />} /> 
        <Route path="/courses" element={<Courses cart={cart} setCart={setCart} />} />
        <Route path="/course/:courseId" element={<CourseDetail cart={cart} setCart={setCart} />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/instructor/:id" element={<InstructorDetail />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/more" element={<More />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failure" element={<Failure />} />
      </Routes>
    </div>
  );
};

export default App;
      </div>
    </div>
  )
}

export default Team
