import { useParams } from 'react-router-dom';
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
    video: 'https://www.youtube.com/watch?v=J1D-5feoHF4'
  },
  { 
    name: 'Graphic Design', 
    image: graphic, 
    duration: '2.5 Months', 
    price: '10,000', 
    instructor: 'Nancy White', 
    category: 'Designing Courses',
    description: 'A course that covers the basics of graphic design and tools like Photoshop and Illustrator.',
    syllabus: [
      'Introduction to Graphic Design',
      'Color Theory',
      'Typography',
      'Design Software (Photoshop, Illustrator)',
      'Creating Designs for Print and Web',
    ],
    rating: '4.3',
    id: 'graphic-design',
    video: 'https://www.youtube.com/watch?v=dFSia1LZI4Y'
  }
  // Add other courses here...
];

function CourseDetail() {
  const { courseId } = useParams();
  console.log(courseId); // Debugging line to check the courseId value
  const course = courseList.find(course => course.id === courseId);

  if (!course) {
    return <p className="text-center text-red-500 font-bold mt-10">Course not found!</p>;
  }

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

      {/* Syllabus */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold">Syllabus</h2>
        <ul className="list-disc pl-10 pt-4 font-semibold text-gray-700">
          {course.syllabus.map((item, index) => (
            <li key={index} className="py-1">{item}</li>
          ))}
        </ul>
      </div>

      {/* Course Video */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl text-blue-950 font-semibold underline mb-4">Course Preview</h2>
        {course.video ? (
          <iframe 
            width="720" 
            height="405" 
            src={course.video.replace("watch?v=", "embed/")} 
            title={course.name} 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="rounded-lg shadow-lg mx-auto"
          ></iframe>
        ) : (
          <p className="text-gray-500 italic">No video preview available for this course.</p>
        )}
      </div>

      {/* Category */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold">Category</h2>
        <p className="text-xl pt-3 text-gray-800">{course.category}</p>
      </div>

      {/* Buttons */}
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

