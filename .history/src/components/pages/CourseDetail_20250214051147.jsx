import { useParams } from 'react-router-dom';
import star from '../../assets/images/star.png';

// Import course images
import ui from '../../assets/images/ui.png';
import graphic from '../../assets/images/graphic.png';
import science from '../../assets/images/science.png';
import stack from '../../assets/images/stack.png';

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
    id: 'ui-ux'
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
    id: 'graphic-design'
  },
  { 
    name: 'Data Science', 
    image: science, 
    duration: '3 Months', 
    price: '10,000', 
    instructor: 'Henry Smiths', 
    category: 'IT Courses',
    description: 'Learn about data analysis, machine learning, and data visualization using Python.',
    syllabus: [
      'Introduction to Data Science',
      'Data Cleaning and Preprocessing',
      'Exploratory Data Analysis (EDA)',
      'Machine Learning Algorithms',
      'Data Visualization with Python',
    ],
    rating: '4.7',
    id: 'data-science'
  },
  { 
    name: 'MERN Stack', 
    image: stack, 
    duration: '3 Months', 
    price: '10,000', 
    instructor: 'Henry Smiths', 
    category: 'IT Courses',
    description: 'Learn to build web applications using MongoDB, Express.js, React, and Node.js.',
    syllabus: [
      'Introduction to MERN Stack',
      'Setting up the Development Environment',
      'Building RESTful APIs with Node and Express',
      'Creating Frontend with React',
      'Connecting the Backend with MongoDB',
    ],
    rating: '4.6',
    id: 'mern-stack'
  },
];

function CourseDetail() {
  const { courseId } = useParams();
  const course = courseList.find(course => course.id === courseId);

  if (!course) {
    return <p className="text-center text-red-500 font-bold mt-10">Course not found!</p>;
  }

  return (
    <div className="p-8  mx-auto">
      {/* Course Banner with Overlay */}
      <div className="relative w-full">
        <img src={star} alt="Course Banner" className="w-full  shadow-lg" />
        <div className="absolute top-0 left-0 w-full  flex flex-col justify-center p-8 text-white">
          <h1 className="text-3xl font-bold">{course.name}</h1>
          <p className="italic text-gray-300 mt-2">By, {course.instructor}</p>
          <p className="text-lg font-semibold mt-2">Rs. {course.price}</p>
          <p className="text-lg font-semibold mt-2">Ratings: {course.rating}</p>
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

      {/* Syllabus */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold">Syllabus</h2>
        <ul className="list-disc pl-5 pt-2 font-semibold text-gray-700">
          {course.syllabus.map((item, index) => (
            <li key={index} className="py-1">{item}</li>
          ))}
        </ul>
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
