import { useParams } from 'react-router-dom';
import star from '../../assets/images/star.png';

// Import course images
import ui from '../../assets/images/ui.png';
import pocket from '../../assets/images/pocket.png';
import threeD from '../../assets/images/threeD.png';

const courseList = [
  { 
    name: 'UI/UX Design', 
    image: ui, 
    duration: '2.5 Months', 
    price: '10,000', 
    instructor: 'Nancy White', 
    category: 'Designing Courses',
    description: 'Learn the fundamentals of UI/UX design, including user-centered design principles and tools.',
    syllabus: [
      'Introduction to UI/UX Design',
      'User Research and Personas',
      'Wire-framing and Prototyping',
      'UI Design Principles',
      'Designing for Mobile and Web',
    ],
    rating: '4.5',
    id: 'ui-ux',
    video: 'https://www.youtube.com/embed/J1D-5feoHF4'
  },
  { 
    name: 'Public Speaking & Presentation', 
    image: pocket, 
    duration: '1 Month', 
    price: '7,500', 
    instructor: 'Laura Williams', 
    category: 'Entrepreneurship Courses',
    description: 'A beginner-friendly guide to starting and scaling a small business from home.',
    syllabus: [
      'Entrepreneurship Basics',
      'Creating a Business Plan',
      'E-commerce & Dropshipping',
      'Social Media for Business',
      'Financial Management for Small Businesses',
    ],
    rating: '4.2',
    id: 'public-speaking',
    video: 'https://www.youtube.com/embed/tShavGuo0_E'
  },
  { 
    name: '3D Modeling & Animation', 
    image: threeD, 
    duration: '3.5 Months', 
    price: '11,000', 
    instructor: 'Chris Evans', 
    category: 'Designing Courses',
    description: 'Master 3D modeling, animation, and rendering using industry-standard software.',
    syllabus: [
      'Introduction to 3D Animation',
      'Modeling Techniques',
      'Texturing & Lighting',
      'Character Animation',
      'Rendering & Final Output',
    ],
    rating: '4.7',
    id: '3d-modeling',
    video: 'https://www.youtube.com/embed/JvN-t0PwLaE'
  }
];

function CourseDetail() {
  const { courseId } = useParams();
  const course = courseList.find(course => course.id === courseId);

  if (!course) {
    return <p className="text-center text-red-500 font-bold mt-10">Course not found!</p>;
  }

  return (
    <div className="p-8 mx-auto ">
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

      <div className="mt-8">
        <h2 className="text-2xl text-blue-950 font-semibold underline">Course Info</h2>
      </div>
      <div className="flex flex-col bg-gray-100 p-6">
        <h1 className="font-extrabold text-3xl text-center pb-4">About This Course</h1>
        <p className="pb-6">{course.description}</p>
      </div>

      <div className="mt-6 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold">Syllabus</h2>
          <ul className="list-disc pt-4 font-semibold text-gray-700">
            {course.syllabus.map((item, index) => (
              <li key={index} className="py-1">{item}</li>
            ))}
          </ul>
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold">Course Video</h2>
          {course.video ? (
            <iframe
              className="mt-4 w-full h-64"
              src={course.video}
              title={course.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <p className="text-red-500 mt-4">No video available for this course.</p>
          )}
        </div>
      </div>

      <div className="">
        <h2 className="text-2xl font-bold">Category</h2>
        <p className="text-xl pt-3 text-gray-800">{course.category}</p>
      </div>

      <div className="mt-6 flex gap-4">
        <button className="bg-blue-900 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
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



