import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import Sidebar from './components/Sidebar/Sidebar';
import MyProfile from './components/Sis/MyProfile'; // Add this import
import MyCourses from './components/pages/MyCourses'; // Add this import
import MyTasks from './components/pages/MyTasks'; // Add this import
import CourseVideos from './components/pages/CourseVideos'; // Add this import
import Feedback from './components/pages/Feedback'; // Add this import
import Messages from './components/pages/Messages'; // Add this import
import Settings from './components/pages/Settings'; // Add this import

const App = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]); 
  const [user, setUser] = useState(null); 

  return (
    <Router>
      <div>
        {/* Navbar */}
        <Navbar cart={cart} wishlist={wishlist} setWishlist={setWishlist} user={user} />

        {/* Main layout with Sidebar */}
        <div className="flex">
          <Sidebar onLogout={() => console.log("Logout clicked")} />
          
          {/* Main Content Area */}
          <div className="flex-1">
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
              <Route path="/tasks" element={<MyTasks />} />
              <Route path="/videos" element={<CourseVideos />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;









