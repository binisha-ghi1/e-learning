import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import star from '../../assets/images/star.png';
import { courseList } from './Courses'; // Assuming you have a separate file for course data

function CourseDetail() {
  const { courseId } = useParams();
  const [cart, setCart] = useState([]);

  const course = courseList.find(course => course.id === courseId);

  useEffect(() => {
    // Load cart from localStorage if available
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    // Store cart in localStorage whenever it changes
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  if (!course) {
    return <p className="text-center text-red-500 font-bold mt-10">Course not found!</p>;
  }

  const getYouTubeVideoId = (url) => {
    try {
      const videoId = new URL(url).searchParams.get("v");
      return videoId;
    } catch (error) {
      console.error("Invalid video URL:", url);
      return null;
    }
  };

  const videoId = getYouTubeVideoId(course.video);

  const handleAddToCart = () => {
    const updatedCart = [...cart, course];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save to localStorage
    alert(`${course.name} added to cart!`);
  };

  const handleEnrollNow = () => {
    alert(`You have successfully enrolled in ${course.name}!`);
  };

  return (
    <div className="p-8 mx-auto">
      <div className="relative w-full">
        <img src={star} alt="Course Banner" className="w-full shadow-lg" />
        <div className="absolute top-0 left-0 w-full flex flex-col justify-center p-8 text-white">
          <h1 className="text-3xl font-bold">{course.name}</h1>
          <p className="italic text-gray-300 mt-2">By, {course.instructor}</p>
          <p className="text-lg font-semibold mt-2">Rs. {course.price}</p>
          <p className="text-lg text-yellow-400 font-semibold mt-2">Ratings: {course.rating}</p>
          <p className="pt-4">{course.description}</p>
          <div className="absolute top-4 right-50">
            <img src={course.image} alt={course.name} className="w-72 h-42 object-cover rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl text-blue-950 font-semibold underline">Course Info</h2>
      </div>
      <div className="flex flex-col bg-gray-100 p-6 rounded-lg shadow-md">
        <h1 className="font-extrabold text-3xl text-center mt-5 pb-10">About This Course</h1>
        <p>{course.description}</p>
      </div>
      
      <div className="mt-6">
        <h2 className="text-2xl font-bold">Syllabus</h2>
        <ul className="list-disc pl-6 pt-4 text-gray-700">
          {course.syllabus.map((item, index) => (
            <li key={index} className="py-1">{item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold">Course Video</h2>
        {videoId ? (
          <iframe
            className="mt-4 w-full h-64"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={course.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p className="text-red-500 mt-4">No video available for this course.</p>
        )}
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold">Category</h2>
        <p className="text-xl pt-3 text-gray-800">{course.category}</p>
      </div>

      <div className="mt-6 flex gap-4">
        <button 
          className="bg-blue-900 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300"
          onClick={handleEnrollNow}
        >
          Enroll Now
        </button>
        <button 
          className="bg-yellow-400 text-white py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default CourseDetail;



