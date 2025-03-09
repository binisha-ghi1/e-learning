import { useParams } from 'react-router-dom';
import star from '../../assets/images/star.png';
import { useCourseContext } from './CourseContext';
import { courseList } from './courseData'; // Assuming you have courseList in a separate file

function CourseDetail() {
  const { courseId } = useParams();
  const { enrollInCourse } = useCourseContext();
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

  const handleEnroll = (courseId) => {
    const success = enrollInCourse(courseId);
    if (success) {
      alert(`You have successfully enrolled in ${course.name}!`);
    } else {
      alert('You are already enrolled in this course!');
    }
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

          <div className="absolute top-4 right-50">
            <img 
              src={course.image} 
              alt={course.name} 
              className="w-72 h-42 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Rest of your existing CourseDetail content */}
      <div className="mt-6 flex gap-4">
        <button 
          onClick={() => handleEnroll(course.id)} 
          className="bg-blue-900 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Enroll Now
        </button>
        <button className="bg-yellow-400 text-white py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default CourseDetail;




