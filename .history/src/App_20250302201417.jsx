import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"; 
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
import Wishlist from './components/pages/Wishlist';
import MyProfile from './components/pages/MyProfile';
import Tasks from './components/pages/Tasks';
import MyCourses from './components/pages/MyCourses';
import Resources from './components/pages/Resources';
import Feedback from './components/pages/Feedback';
import Messages from './components/pages/Messages';
import Settings from './components/pages/Settings';
import Offer from './components/offer/Offer';
import { auth } from './firebase/firebaseConfig';

const App = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate(); // You need useNavigate to navigate after logout

  // Check the authentication state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Logout function
  const handleLogout = () => {
    console.log("Logout triggered"); // Debugging log
    // Remove user from localStorage (if you're using it)
    localStorage.removeItem('user');
    setUser(null); // Update user state

    // Log out successful, navigate to the homepage
    navigate('/');
  };

  // Determine if the sidebar should be shown
  const showSidebar = [
    "/dashboard", "/profile", "/mycourses", "/tasks", "/resources",
    "/feedback", "/messages", "/settings", "/wishlist"
  ].includes(location.pathname) && user; // Only show the sidebar if the user is logged in

  // ProtectedRoute to redirect if user is not logged in
  const ProtectedRoute = ({ element }) => {
    return user ? element : (
      <div className=' flex flex-col   bg-gray-200 h-screen items-center justify-center text-center text-3xl font-bold text-blue-950' style={{ padding: "20px", textAlign: "center" }}>
        <h2 >Please log in to view this page.</h2>
        <button 
        className='pt-4 '
        onClick={() => navigate('/login')}>Go to Login</button>
      </div>
    );
  };

  return (
    <div>
      <Navbar cart={cart} wishlist={wishlist} setWishlist={setWishlist} user={user} onLogout={handleLogout} />
      <div className="flex">
        {showSidebar && <Sidebar onLogout={handleLogout} />} {/* Only show Sidebar if user is logged in */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist}/>} />
            <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
            <Route path="/courses" element={<Courses cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist}/>} />
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
            <Route path="/profile" element={<ProtectedRoute element={<MyProfile />} />} />
            <Route path="/mycourses" element={<ProtectedRoute element={<MyCourses />} />} />
            <Route path="/tasks" element={<ProtectedRoute element={<Tasks />} />} />
            <Route path="/resources" element={<ProtectedRoute element={<Resources />} />} />
            <Route path="/feedback" element={<ProtectedRoute element={<Feedback />} />} />
            <Route path="/messages" element={<ProtectedRoute element={<Messages />} />} />
            <Route path="/settings" element={<ProtectedRoute element={<Settings />} />} />
          </Routes>
        </div>
      </div>
      <Offer />
    </div>
  );
};

export default App;














