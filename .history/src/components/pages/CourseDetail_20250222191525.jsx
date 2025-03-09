import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import star from '../../assets/images/star.png';

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

export const courseList = [
  // Your courseList remains unchanged
];

function CourseDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [enrolled, setEnrolled] = useState(false); // State to manage enrollment status

  const course = courseList.find(course => course.id === courseId);

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

  const handleEnrollNow = () => {
    // Mock enrollment functionality
    setEnrolled(true); // Set the state to true when the user enrolls
    alert(`You have successfully enrolled in ${course.name}!`);
    
    // Redirect to another page (e.g., homepage or enrollment confirmation page)
    // navigate("/thank-you");
  };

  return (
    <div className="p-8 mx-auto">
      {/* Course Banner with Overlay */}
      <div className="relative w-full">
        <img src={star} alt="Course Banner" className="w-full shadow-lg" />
        <div className="absolute top-0 left-0 w-full flex flex-col justify-center p-8 text-white">
          <h1 className="text-3xl font-bold">{course.name}</h1>
          <p className="italic text-gray-300 mt-2">By, {course.instructor}</p>
          <p className="text-lg font-semibold mt-2">Rs. {course.price}</p>
          <p className="text-lg text-yellow-400 font-semibold mt-2">Ratings: {course.rating}</p>
          <p className="pt-4">{course.description}</p>

          {/* Course Image */}
          <div className="absolute top-4 right-50">
            <img 
              src={course.image} 
              alt={course.name} 
              className="w-72 h-42 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Course Info */}
      <div className="mt-8">
        <h2 className="text-2xl text-blue-950 font-semibold underline">Course Info</h2>
      </div>
      <div className="flex flex-col bg-gray-100">
        <h1 className="font-extrabold text-3xl text-center mt-5 pb-10">About This Course</h1>
        <p className="pl-10 pr-10 pb-10">{course.description}</p>
      </div>
           
      <div className="mt-6 flex flex-col ">
        <h2 className="text-2xl font-bold">Syllabus</h2>
        <ul className="list-disc  pt-8 font-semibold text-gray-700">
          {course.syllabus.map((item, index) => (
            <li key={index} className="py-1">{item}</li>
          ))}
        </ul>
      </div>

      <div className="w-full lg:w-1/2 mt-6">
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

      {/* Category */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold">Category</h2>
        <p className="text-xl pt-3 text-gray-800">{course.category}</p>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <button 
          onClick={handleEnrollNow}
          className="bg-blue-900 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Enroll Now
        </button>
        <button className="bg-yellow-400 text-white py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300">
          Add to Cart
        </button>
      </div>

      {enrolled && (
        <div className="mt-6 text-center text-green-500">
          <p>You are now enrolled in the {course.name} course!</p>
        </div>
      )}
    </div>
  );
}

export default CourseDetail;





