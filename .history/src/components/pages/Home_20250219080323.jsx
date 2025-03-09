import React, { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { GrBook } from "react-icons/gr";
import { BiCrown } from "react-icons/bi";
import { TbBulb } from "react-icons/tb";
import { MdOutlineVerified } from "react-icons/md";

// Import assets
import nancy from "../assets/NancyWhite.jpg";
import henry from "../assets/HenrySmiths.jpg";
import charlotte from "../assets/Charlotte.jpg";
import jordan from "../assets/Jordan.jpg";
import ethan from "../assets/Ethan.jpg";
import instructors from "../assets/instructors.png";
import students from "../assets/students.png";
import courses from "../assets/courses.png";
import certificate from "../assets/certificate.png";
import second from "../assets/second.jpg";

// Sample course data
const courseList = [
  {
    id: 1,
    name: "React for Beginners",
    category: "Web Development",
    instructor: "Nancy White",
    price: "$49.99",
    duration: "6 weeks",
    image: nancy,
  },
  {
    id: 2,
    name: "Advanced JavaScript",
    category: "Programming",
    instructor: "Henry Smiths",
    price: "Free",
    duration: "4 weeks",
    image: henry,
  },
  {
    id: 3,
    name: "UI/UX Design Basics",
    category: "Design",
    instructor: "Charlotte",
    price: "$39.99",
    duration: "5 weeks",
    image: charlotte,
  },
];

// Memoize instructor images for performance
const instructorImages = {
  "Nancy White": nancy,
  "Henry Smiths": henry,
  "Charlotte": charlotte,
  "Jordan": jordan,
  "Ethan": ethan,
};

const Home = () => {
  // Load cart state from localStorage with error handling
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  });

  // Sync cart state with localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add to cart function
  const addToCart = (course) => {
    if (!cart.some((item) => item.id === course.id)) {
      setCart((prevCart) => [...prevCart, { id: course.id }]);
      alert(`${course.name} added to cart!`);
    } else {
      alert(`${course.name} is already in the cart.`);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      {/* Course List Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-10 pb-8 px-6">
        {courseList.map((course) => (
          <div key={course.id} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center max-w-xs">
            <img src={course.image} alt={course.name} className="w-40 h-40 object-cover rounded-lg mb-4" />
            <p className="text-lg text-center rounded-full text-blue-950 mb-2 bg-yellow-400 font-bold px-4 py-1">
              {course.price === "Free" ? "Free" : `${course.price}`}
            </p>
            <h2 className="text-xl font-semibold text-center">{course.name}</h2>
            <p className="text-gray-600"><strong>Duration:</strong> {course.duration}</p>
            <div className="flex items-center mt-3">
              <img src={instructorImages[course.instructor]} alt={course.instructor} className="w-8 h-8 rounded-full mr-2" />
              <span><strong>By,</strong> {course.instructor}</span>
            </div>
            <button onClick={() => addToCart(course)} className="flex items-center justify-center bg-yellow-400 text-blue-950 py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300 w-full mt-4">
              <IoCartOutline className="text-xl mr-2" />
              Add to Cart
            </button>
            <NavLink to={`/course/${course.id}`} className="mt-4 w-full">
              <button className="text-blue-900 text-xl border-2 border-blue-900 py-2 px-6 w-full hover:bg-blue-900 hover:text-white transition duration-300">
                VIEW COURSE
              </button>
            </NavLink>
          </div>
        ))}
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10">
        {[
          { img: instructors, text: "100+ Instructors" },
          { img: courses, text: "500+ Courses" },
          { img: certificate, text: "Free Certifications" },
          { img: students, text: "1000+ Students" }
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center bg-blue-950 text-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
            <img src={item.img} alt={item.text} className="w-16 h-16 object-contain mb-3" />
            <h2 className="text-lg font-bold">{item.text}</h2>
          </div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="flex flex-col md:flex-row items-center justify-center px-6 py-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={second} alt="Why Choose Us" className="w-full max-w-md" />
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: <GrBook className="text-4xl text-yellow-400" />, title: "Diverse Course Options", desc: "For beginners to advanced learners." },
            { icon: <BiCrown className="text-4xl text-yellow-400" />, title: "Affordable Pricing", desc: "Free resources & trial courses." },
            { icon: <TbBulb className="text-4xl text-yellow-400" />, title: "Flexible Learning", desc: "Anytime, anywhere, at your pace." },
            { icon: <MdOutlineVerified className="text-4xl text-yellow-400" />, title: "Certification of Completion", desc: "Showcase your skills & achievements." }
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center bg-blue-950 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-2">
                {feature.icon}
                <h2 className="text-lg font-bold">{feature.title}</h2>
              </div>
              <p className="text-center">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;







