import React from 'react';
import { useParams } from 'react-router-dom';
import { courseList } from './Courses';  // Import courseList for course details

const CourseDetail = () => {
    const { id } = useParams();  // Get the course ID from the URL
    const course = courseList.find(course => course.id === id);  // Find the course by ID

    if (!course) {
        return <p>Course not found!</p>;  // If course is not found, display an error
    }

    return (
        <div className="min-h-screen bg-gray-200 py-10">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
                <div className="flex flex-col items-center">
                    <img src={course.image} alt={course.name} className="w-48 h-48 object-cover rounded-lg mb-6" />
                    <h1 className="text-3xl font-semibold text-center mb-4">{course.name}</h1>
                    <p className="text-lg text-center text-gray-600"><strong>Duration:</strong> {course.duration}</p>
                    <p className="text-lg text-center text-gray-600"><strong>Price:</strong> {course.price === 'Free' ? 'Free' : `${course.price}`}</p>
                    <div className="flex items-center gap-2 mt-4">
                        <img src={course.instructorImage} alt={course.instructor} className="w-10 h-10 rounded-full" />
                        <p className="text-gray-600"><strong>Instructor:</strong> {course.instructor}</p>
                    </div>
                    <div className="mt-6">
                        <p className="text-lg text-gray-700"><strong>Course Description:</strong></p>
                        <p className="text-gray-600 mt-2">
                            This course offers an in-depth understanding of {course.name}. It covers all essential topics, including [topics related to course].
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;






