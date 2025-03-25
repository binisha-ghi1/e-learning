import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react"; 
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
import Wishlist from "./components/pages/Wishlist";
import MyProfile from "./components/pages/MyProfile";
import Tasks from "./components/pages/Tasks";
import MyCourses from "./components/pages/MyCourses";
import Resources from "./components/pages/Resources";
import Feedback from "./components/pages/Feedback";
import Messages from "./components/pages/Messages";
import Settings from "./components/pages/Settings";
import Offer from "./components/offer/Offer";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const { user, isAuthenticated, isLoading, logout } = useAuth0(); 
  const location = useLocation();
  const navigate = useNavigate();

 
  if (isLoading) {
    return <div>Loading...</div>;
  }

  
  const logoutUser = async () => {
    try {
      await logout({ returnTo: window.location.origin });
      navigate("/login");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  const shouldShowSidebar =
    isAuthenticated &&
    [
      "/dashboard",
      "/profile",
      "/mycourses",
      "/tasks",
      "/resources",
      "/feedback",
      "/messages",
      "/settings",
    ].some((path) => location.pathname.startsWith(path));

  return (
    <div>
      <Navbar
        cart={cartItems}
        wishlist={wishlistItems}
        setWishlist={setWishlistItems}
        user={user} 
        onLogout={logoutUser}
      />
      <div className="flex">
        {shouldShowSidebar && <Sidebar onLogout={logoutUser} />}
        <div className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  cart={cartItems}
                  setCart={setCartItems}
                  wishlist={wishlistItems}
                  setWishlist={setWishlistItems}
                />
              }
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/courses"
              element={
                <Courses
                  cart={cartItems}
                  setCart={setCartItems}
                  wishlist={wishlistItems}
                  setWishlist={setWishlistItems}
                />
              }
            />
            <Route
              path="/course/:courseId"
              element={<CourseDetail cart={cartItems} setCart={setCartItems} />}
            />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/instructors/:id" element={<InstructorDetail />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/more" element={<More />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/cart"
              element={<CartPage cart={cartItems} setCart={setCartItems} />}
            />
            <Route
              path="/wishlist"
              element={<Wishlist wishlist={wishlistItems} setWishlist={setWishlistItems} />}
            />
            <Route path="/payment" element={<Payment cart={cartItems} />} />
            <Route path="/success" element={<Success />} />
            <Route path="/failure" element={<Failure />} />
            <Route path="/team" element={<Team />} />
            <Route path="/student" element={<Student />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/mycourses" element={<MyCourses />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
      <Offer />
    </div>
  );
};

export default App;





















