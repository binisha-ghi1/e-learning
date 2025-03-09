import { useParams } from 'react-router-dom';
import { useState } from 'react';
import star from '../../assets/images/star.png';
import { courseList } from './courseData'; // Assuming courseData.js stores the course list

function CourseDetail() {
  const { courseId } = useParams();
  const [cart, setCart] = useState([]);
  const [enrolled, setEnrolled] = useState([]);

  const course = courseList.find(course => course.id === courseId);
  if (!course) {
    return <p className="text-center text-red-500 font-bold mt-10">Course not found!</p>;
  }

  const handleAddToCart = () => {
    if (!cart.includes(course.id)) {
      setCart([...cart, course.id]);
      alert(`${course.name} added to cart!`);
    } else {
      alert(`${course.name} is already in your cart!`);
    }
  };

  const handleEnrollNow = () => {
    if (!enrolled.includes(course.id)) {
      setEnrolled([...enrolled, course.id]);
      alert(`You have successfully enrolled in ${course.name}!`);
    } else {
      alert(`You are already enrolled in ${course.name}!`);
    }
  };

  return (
    <div className="p-8 mx-auto">
      <div className="relative w-full">
        <img src={star} alt="Course Banner" className="w-full shadow-lg" />
        <div className="absolute top-0 left-0 w-full flex flex-col justify-center p-8 text-white">
          <h1 className="text-3xl font-bold">{course.name}</h1>
          <p className="italic text-gray-300 mt-2">By {course.instructor}</p>
          <p className="text-lg font-semibold mt-2">Rs. {course.price}</p>
          <p className="text-lg text-yellow-400 font-semibold mt-2">Ratings: {course.rating}</p>
          <p className="pt-4">{course.description}</p>
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-semibold underline">Course Info</h2>
        <p className="mt-4">{course.description}</p>
      </div>
      
      <div className="mt-6">
        <h2 className="text-2xl font-bold">Syllabus</h2>
        <ul className="list-disc pl-6 mt-4 text-gray-700">
          {course.syllabus.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      
      <div className="mt-6">
        <h2 className="text-2xl font-bold">Category</h2>
        <p className="mt-2 text-gray-800">{course.category}</p>
      </div>
      
      <div className="mt-6 flex gap-4">
        <button
          onClick={handleEnrollNow}
          className="bg-blue-900 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Enroll Now
        </button>
        <button
          onClick={handleAddToCart}
          className="bg-yellow-400 text-white py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default CourseDetail;


