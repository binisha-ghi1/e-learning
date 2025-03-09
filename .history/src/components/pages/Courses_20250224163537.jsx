import React, { useState, useEffect } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { NavLink, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';


// Import course images
import ui from '../../assets/images/ui.png';
import graphic from '../../assets/images/graphic.png';
import science from '../../assets/images/science.png';
import web from '../../assets/images/web.png';
import project from '../../assets/images/project.png';
import digital from '../../assets/images/digital.png';
import brand from '../../assets/images/brand.png';
import pocket from '../../assets/images/pocket.png';
import threeD from '../../assets/images/threeD.png';
import stack from '../../assets/images/stack.png';
import business from '../../assets/images/business.png';

// Import instructor images
import nancy from '../../assets/images/nancy.png';
import henry from '../../assets/images/henry.png';
import charlotte from '../../assets/images/charlotte.png';
import jordan from '../../assets/images/jordan.png';
import ethan from '../../assets/images/ethan.png';

const Courses = ({ cart, setCart }) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('search') || ""; // ✅ Get search term from URL

    const instructorImages = {
        'Nancy White': nancy,
        'Henry Smiths': henry,
        'Charlotte': charlotte,
        'Jordan': jordan,
        'Ethan': ethan
    };

    const courseList = [
        { name: 'UI/UX Design', image: ui, duration: '2.5 Months', price: '10,000', instructor: 'Nancy White', instructorImage: instructorImages['Nancy White'], category: 'Designing Courses', id: 'ui-ux' },
        { name: 'Graphic Design', image: graphic, duration: '2.5 Months', price: '10,000', instructor: 'Nancy White', instructorImage: instructorImages['Nancy White'], category: 'Designing Courses', id: 'graphic-design' },
        { name: 'Data Science', image: science, duration: '3 Months', price: '10,000', instructor: 'Henry Smiths', instructorImage: instructorImages['Henry Smiths'], category: 'IT Courses', id: 'data-science' },
        { name: 'MERN Stack', image: stack, duration: '3 Months', price: '10,000', instructor: 'Henry Smiths', instructorImage: instructorImages['Henry Smiths'], category: 'IT Courses', id: 'mern-stack' },
        { name: 'Web Development', image: web, duration: '3 Months', price: '10,000', instructor: 'Henry Smiths', instructorImage: instructorImages['Henry Smiths'], category: 'IT Courses', id: 'web-development' },
        { name: 'Project Management', image: project, duration: '2.5 Months', price: '10,000', instructor: 'Jordan', instructorImage: instructorImages['Jordan'], category: 'Business Courses', id: 'project-management' },
        { name: 'Digital Marketing', image: digital, duration: '3 Months', price: '10,000', instructor: 'Nancy White', instructorImage: instructorImages['Nancy White'], category: 'Marketing Courses', id: 'digital-marketing' },
        { name: 'Business Analytics', image: business, duration: '3 Months', price: '10,000', instructor: 'Ethan', instructorImage: instructorImages['Ethan'], category: 'Business Courses', id: 'business-analytics' },
        { name: 'Brand Management', image: brand, duration: '1.5 Month', price: 'Free', instructor: 'Charlotte', instructorImage: instructorImages['Charlotte'], category: 'Free Courses', id: 'brand-management' },
        { name: 'Public Speaking & Presentation', image: pocket, duration: '1 Month', price: 'Free', instructor: 'Jordan', instructorImage: instructorImages['Jordan'], category: 'Free Courses', id: 'public-speaking' },
        { name: '3D Modeling & Animation', image: threeD, duration: '3 Months', price: '10,000', instructor: 'Ethan', instructorImage: instructorImages['Ethan'], category: 'Creative Arts Courses', id: '3d-modeling' },
    ];

    const [category, setCategory] = useState('All Courses');
    const [filteredCourses, setFilteredCourses] = useState(courseList);
    const [wishlist, setWishlist] = useState([]); // ✅ Fix: Added state

    // ✅ Update filtered courses based on search query & category
    useEffect(() => {
        let filtered = courseList;

        // Apply search filter
        if (searchQuery.trim()) {
            filtered = filtered.filter(course =>
                course.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Apply category filter
        if (category !== 'All Courses') {
            filtered = filtered.filter(course => course.category === category);
        }

        setFilteredCourses(filtered);
    }, [searchQuery, category]); // ✅ Re-run when searchQuery or category changes

    const addToCart = (course) => {
        if (!cart.some(item => item.id === course.id)) {
            setCart([...cart, course]);
            alert(`${course.name} added to cart!`);
        } else {
            alert(`${course.name} is already in the cart.`);
        }
    };

    const addToWishlist = (course) => {
        if (!wishlist.some(item => item.id === course.id)) {
            setWishlist([...wishlist, course]);
            alert(`${course.name} added to wishlist!`);
        } else {
            alert(`${course.name} is already in your wishlist.`);
        }
    };

    return (
        <div c>
        <div className='flex flex-row flex-wrap gap-20 pt-20 min-h-screen bg-gray-200'>
            {/* Sidebar */}
            <div className='flex'>
                <div className='flex flex-col flex-wrap items-start justify-start pl-20'>
                    <h1 className='text-xl font-extrabold pl-12 pb-4'>OUR COURSES</h1>
                    <div className='flex flex-col bg-gray-100 text-center pt-4 pb-6 pl-10 pr-10 rounded-lg shadow-lg shadow-blue-900'>
                        <p className='text-xl text-blue-950 font-bold underline pb-8'>Category</p>
                        {['All Courses', 'Free Courses', 'IT Courses', 'Designing Courses', 'Marketing Courses', 'Business Courses', 'Creative Arts Courses'].map(cat => (
                            <button
                                key={cat}
                                className={`font-medium pb-6 hover:underline cursor-pointer ${category === cat ? 'text-blue-950 font-bold' : ''}`}
                                onClick={() => setCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Course List */}
            <div className="flex-1 flex-wrap pt-10 pb-8 pr-20">
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                            <div key={course.id} className="bg-white p-6 rounded-2xl shadow-lg shadow-blue-900 flex flex-col flex-wrap items-center">
                                <img src={course.image} alt={course.name} className="w-40 h-40 object-cover rounded-lg mb-4"/>
                                <p className="text-lg w-22 text-center rounded-full text-blue-950 mb-2 bg-yellow-400 font-bold mt-2">
                                    {course.price === 'Free' ? 'Free' : `${course.price}`}
                                </p>
                                <h2 className="text-xl font-semibold text-center">{course.name}</h2>
                                <p className="text-gray-600"><strong>Duration:</strong> {course.duration}</p>
                                <div className="flex  flex-wrap items-center gap-2 mt-2">
                                    <img src={course.instructorImage} alt={course.instructor} className="w-8 h-8 rounded-full"/>
                                    <p className="text-gray-600"><strong>By:</strong> {course.instructor}</p>
                                </div>
                             <div className='flex flex-row flex-wrap items-center justify-center ml-8 '>
                                         <button onClick={() => addToCart(course)} className="flex flex-wrap items-center justify-center bg-yellow-400 text-blue-950 py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300 w-40 mt-4">
                                           <IoCartOutline className="text-xl mr-2" />
                                           Add to Cart
                                         </button>
                                         <button onClick={() => addToWishlist(course)} className="flex flex-wrap items-center justify-center  text-blue-950  px-6 transition duration-300 ">
                                           <FaRegHeart className="text-xl mr-2" />
                                         </button>
                                         </div>
      {/* View Course Button */}
      <NavLink to={`/course/${course.id}`} className="mt-4 w-full">
        <button className="text-blue-900 text-xl border-2 border-blue-900 py-2 px-6 w-full hover:bg-blue-900 hover:text-white transition duration-300">
          VIEW COURSE
        </button>
      </NavLink>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No courses found.</p>
                    )}
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default Courses;
