import React, { useState, useEffect } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
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
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        let filtered = courseList;
        if (searchQuery.trim()) {
            filtered = filtered.filter(course => course.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        if (category !== 'All Courses') {
            filtered = filtered.filter(course => course.category === category);
        }
        setFilteredCourses(filtered);
    }, [searchQuery, category]);

    const toggleWishlist = (course) => {
        if (wishlist.some(item => item.id === course.id)) {
            setWishlist(wishlist.filter(item => item.id !== course.id));
        } else {
            setWishlist([...wishlist, course]);
        }
    };

    return (
        <div>
            <nav className="flex justify-between p-4 bg-gray-800 text-white">
                <h1 className="text-lg font-bold">Courses</h1>
                <div className="flex gap-4">
                    <IoCartOutline className="text-2xl" />
                    <FaHeart className="text-2xl text-red-500" />
                    <span>({wishlist.length})</span>
                </div>
            </nav>
            <div className="flex-1 pt-10 pb-8 pr-20">
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                            <div key={course.id} className="bg-white p-6 rounded-2xl shadow-lg shadow-blue-900 flex flex-col items-center">
                                <button onClick={() => toggleWishlist(course)}>
                                    <FaHeart className={wishlist.some(item => item.id === course.id) ? "text-red-500" : "text-gray-500"} />
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No courses found.</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Courses;

