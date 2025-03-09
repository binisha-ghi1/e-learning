import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import AboutUs from "./components/pages/AboutUs";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import Courses from "./components/pages/Courses";
import CourseDetail from "./components/pages/CourseDetail";
import Instructors from "./components/pages/Instructors";
import InstructorDetail from "./components/pages/InstructorDetail";
import More from "./components/pages/More";
import Contact from "./components/pages/Contact";
import Login from "./components/Authenication/Login";
import Signup from "./components/Authenication/Signup";
import CartPage from "./components/pages/CartPage";
import Payment from "./components/pages/Payment";
import Failure from "./components/pages/Failure";
import Success from "./components/pages/Success";
import Team from "./components/Team/Team";
import Student from "./components/Student/Student";
import Wishlist from "./components/Sidebar/Wishlist";

// Dummy Components for Sidebar Routes
const MyProfile = () => <div className="p-6">This is My Profile</div>;
const MyTasks = () => <div className="p-6">My Tasks</div>;
const CourseVideos = () => <div className="p-6">Course Videos</div>;
const Assignments = () => <div className="p-6">Assignments</div>;
const Feedback = () => <div className="p-6">Feedback</div>;
const Messages = () => <div className="p-6">Messages</div>;
const Settings = () => <div className="p-6">Settings</div>;

const App = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [user, setUser] = useState(null);
  const location = useLocation();

  return (
    <div>
      <Navbar cart={cart} wishlist={wishlist} setWishlist={setWishlist} user={user} />

      {/* Layout with Sidebar for Dashboard Pages */}
      <div className="flex">
    
        {location.pathname.startsWith("/dashboard") && <Sidebar />}

        <div className="flex-1 p-6">
          <Routes>
            {/* Public Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/more" element={<More />} />
            <Route path="/signup" element={<Signup setUser={setUser} />} />
            <Route path="/login" element={<Login setUser={setUser} />} />

            {/* Dashboard & Sidebar Pages */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/tasks" element={<MyTasks />} />
            <Route path="/videos" element={<CourseVideos />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />

            {/* Course & Instructor Pages */}
            <Route path="/courses" element={<Courses cart={cart} setCart={setCart} />} />
            <Route path="/course/:courseId" element={<CourseDetail cart={cart} setCart={setCart} />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/instructors/:id" element={<InstructorDetail />} />

            {/* Shopping Pages */}
            <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
            <Route path="/wishlist" element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} />} />
            <Route path="/payment" element={<Payment cart={cart} />} />
            <Route path="/success" element={<Success />} />
            <Route path="/failure" element={<Failure />} />

            {/* Other Pages */}
            <Route path="/team" element={<Team />} />
            <Route path="/student" element={<Student />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;








