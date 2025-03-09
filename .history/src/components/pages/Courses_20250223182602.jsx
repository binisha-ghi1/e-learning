import React, { useState, useEffect } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { NavLink, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';

// Import course images and instructor images
// ... (same imports as before)

const Courses = ({ cart, setCart, wishlist, setWishlist }) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('search') || "";

    const instructorImages = {
        'Nancy White': nancy,
        'Henry Smiths': henry,
        'Charlotte': charlotte,
        'Jordan': jordan,
        'Ethan': ethan
    };

    const courseList = [
        // Course objects
        // ... (same course objects as before)
    ];

    const [category, setCategory] = useState('All Courses');
    const [filteredCourses, setFilteredCourses] = useState(courseList);

    // Update filtered courses based on search query & category
    useEffect(() => {
        let filtered = courseList;

        if (searchQuery.trim()) {
            filtered = filtered.filter(course =>
                course.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (category !== 'All Courses') {
            filtered = filtered.filter(course => course.category === category);
        }

        setFilteredCourses(filtered);
    }, [searchQuery, category]);

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
        <div>
        <div className='flex flex-row gap-20 pt-20 min-h-screen bg-gray-200'>
            {/* Sidebar */}
            <div className='flex'>
                <div className='flex flex-col items-start justify-start pl-20'>
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
            <div className="flex-1 pt-10 pb-8 pr-20">
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                            <div key={course.id} className="bg-white p-6 rounded-2xl shadow-lg shadow-blue-900 flex flex-col items-center">
                                <img src={course.image} alt={course.name} className="w-40 h-40 object-cover rounded-lg mb-4"/>
                                <p className="text-lg w-22 text-center rounded-full text-blue-950 mb-2 bg-yellow-400 font-bold mt-2">
                                    {course.price === 'Free' ? 'Free' : `${course.price}`}
                                </p>
                                <h2 className="text-xl font-semibold text-center">{course.name}</h2>
                                <p className="text-gray-600"><strong>Duration:</strong> {course.duration}</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <img src={course.instructorImage} alt={course.instructor} className="w-8 h-8 rounded-full"/>
                                    <p className="text-gray-600"><strong>By:</strong> {course.instructor}</p>
                                </div>
                                <button
                                    onClick={() => addToCart(course)}
                                    className="flex items-center justify-center bg-yellow-400 text-blue-950 py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300 w-full mt-4"
                                >
                                    <IoCartOutline className="text-xl mr-2" />
                                    Add to Cart
                                </button>

                                <button onClick={() => addToWishlist(course)} className="mt-4">
                                    <FaHeart className={wishlist.some(item => item.id === course.id) ? "text-red-500" : "text-gray-500"} />
                                </button>

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

