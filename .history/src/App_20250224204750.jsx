import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import AboutUs from './components/pages/AboutUs';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';  
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
import Team from './components/Team/Team';
import Student from './components/Student/Student';
import Wishlist from './components/Sidebar/Wishlist';
import MyProfile from './components/pages/MyProfile';
import Tasks from './components/pages/Tasks';
import MyCourses from './components/pages/MyCourses';

const App = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]); 
  const [user, setUser] = useState(null);

  // Handle logout logic (you can add the logout functionality later)
  const handleLogout = () => {
    setUser(null); // Clear user data (for example, logout)
  };

  return (
    <div>
      <Navbar cart={cart} wishlist={wishlist} setWishlist={setWishlist} user={user} />
      
      <Router>
        <div className="flex">
          {/* Sidebar stays fixed */}
          <Sidebar  />
          
          {/* Content area */}
          <div className="flex-1 ml-64"> {/* ml-64 for left margin (adjust based on sidebar width) */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} /> 
              <Route path="/courses" element={<Courses cart={cart} setCart={setCart} />} />
              <Route path="/course/:courseId" element={<CourseDetail cart={cart} setCart={setCart} />} />
              <Route path="/instructors" element={<Instructors />} />
              <Route path="/instructors/:id" element={<InstructorDetail />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/more" element={<More />} />
              <Route path="/signup" element={<Signup setUser={setUser} />} />
              <Route path="/login" element={<Login setUser={setUser} />} />
              <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
              <Route path="/wishlist" element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} />} /> 
              <Route path="/payment" element={<Payment cart={cart} />} />
              <Route path="/success" element={<Success />} />
              <Route path="/failure" element={<Failure />} />
              <Route path="/team" element={<Team />} />
              <Route path="/student" element={<Student />} />
              <Route path="/profile" element={<MyProfile />} />
              <Route path="/mycourses" element={<MyCourses />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/feedback" element={<Resources />} />
              
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;







