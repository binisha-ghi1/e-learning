import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
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

const App = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]); 
  const [user, setUser] = useState(null); 

  return (
    <div>
      <Navbar cart={cart} wishlist={wishlist} setWishlist={setWishlist} user={user} />
      
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
        <Route path="/mycourse" element={<MyCourse />} />
        <Route path="/tasks" element={<MyTasks />} />
        <Route path="/resourses" element={<CourseVideos />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/settings" element={<Settings />} />
  

      </Routes>
      
    </div>
  );
};

export default App;







