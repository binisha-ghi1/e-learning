import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { courseList } from './Courses'; // Make sure the courseList is imported correctly from the Courses page

function CourseDetail({ cart, setCart }) {
    const { courseId } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        // Find the course by its ID
        const foundCourse = courseList.find(course => course.id === courseId);
        setCourse(foundCourse);
    }, [courseId]);

    if (!course) {
        return <p className="text-center text-red-500 font-bold mt-10">Course not found!</p>;
    }

    const handleAddToCart = () => {
        if (!cart.some(item => item.id === course.id)) {
            setCart([...cart, course]);
            alert(`${course.name} added to cart!`);
        } else {
            alert(`${course.name} is already in the cart.`);
        }
    };

    const handleEnrollNow = () => {
        alert(`You have successfully enrolled in ${course.name}!`);
    };

    return (
        <div className="p-8 mx-auto">
            <div className="relative w-full">
                <img src={course.image} alt={course.name} className="w-full shadow-lg" />
                <div className="absolute top-0 left-0 w-full flex flex-col justify-center p-8 text-white">
                    <h1 className="text-3xl font-bold">{course.name}</h1>
                    <p className="italic text-gray-300 mt-2">By, {course.instructor}</p>
                    <p className="text-lg font-semibold mt-2">Rs. {course.price}</p>
                    <p className="text-lg text-yellow-400 font-semibold mt-2">Category: {course.category}</p>
                    <p className="pt-4">{course.description}</p>
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl text-blue-950 font-semibold underline">Course Info</h2>
                <p>{course.description}</p>
            </div>

            <div className="mt-6">
                <h2 className="text-2xl font-bold">Instructor</h2>
                <div className="flex items-center mt-3">
                    <img src={course.instructorImage} alt={course.instructor} className="w-12 h-12 rounded-full mr-4" />
                    <p className="text-lg">{course.instructor}</p>
                </div>
            </div>

            <div className="mt-6 flex gap-4">
                <button
                    onClick={handleEnrollNow}
                    className="bg-blue-900 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300 w-full"
                >
                    Enroll Now
                </button>
                <button
                    onClick={handleAddToCart}
                    className="bg-yellow-400 text-blue-950 py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300 w-full"
                >
                    <IoCartOutline className="mr-2" />
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default CourseDetail;





