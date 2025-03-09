import React, { useState, useEffect } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { NavLink, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';

// Import course and instructor images
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
import nancy from '../../assets/images/nancy.png';
import henry from '../../assets/images/henry.png';
import charlotte from '../../assets/images/charlotte.png';
import jordan from '../../assets/images/jordan.png';
import ethan from '../../assets/images/ethan.png';

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

    const toggleWishlist = (course) => {
        if (wishlist.some(item => item.id === course.id)) {
            setWishlist(wishlist.filter(item => item.id !== course.id));
        } else {
            setWishlist([...wishlist, course]);
        }
    };

    return (
        <div className='flex flex-wrap gap-8 p-10 min-h-screen bg-gray-200'>
            {filteredCourses.map((course) => (
                <div key={course.id} className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
                    <img src={course.image} alt={course.name} className="w-40 h-40 object-cover rounded-lg mb-4"/>
                    <p className="text-lg text-blue-950 bg-yellow-400 px-4 py-1 rounded-full font-bold">{course.price}</p>
                    <h2 className="text-xl font-semibold text-center mt-2">{course.name}</h2>
                    <p className="text-gray-600">Duration: {course.duration}</p>
                    <div className="flex items-center gap-2 mt-2">
                        <img src={course.instructorImage} alt={course.instructor} className="w-8 h-8 rounded-full"/>
                        <p className="text-gray-600">By: {course.instructor}</p>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <button onClick={() => addToCart(course)} className="flex items-center bg-yellow-400 px-4 py-2 rounded-full">
                            <IoCartOutline className="text-xl" />
                        </button>
                        <button onClick={() => toggleWishlist(course)} className="text-red-500">
                            <FaHeart className={wishlist.some(item => item.id === course.id) ? "text-red-600" : "text-gray-400"} />
                        </button>
                    </div>
                </div>
            ))}
            <Footer/>
        </div>
    );
};

export default Courses;

