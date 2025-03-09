import { useParams } from 'react-router-dom';
import star from '../../assets/images/star.png'
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
      name: 'GRAPHIC DESIGN', 
      duration: '2.5 Months', 
      price: '10,000', 
      instructor: 'Nancy White', 
      category: 'Designing Courses',
      description: 'A course that covers the basics of graphic design and tools like Photoshop and Illustrator.',
      syllabus: [
        'Introduction to Graphic Design',
        'Color Theory',
        'Typography',
        'Design Software (Photo-shop, Illustrator)',
        'Creating Designs for Print and Web',
      ],
      rating: '4.3',
      id: 'graphic-design'
    },
    { 
      name: 'DATA SCIENCE', 
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
      name: 'MERN STACK', 
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
  
    // Filter the course by ID
    const course = courseList.find(course => course.id === courseId);
  
    if (!course) {
      return <p>Course not found!</p>;
    }
    return (
        <div className="  p-8">
            <img src={star} alt="" className="w-full" />
            <div className='flex flex-col relative bottom-100 pl-10 text-white'>
          <h1 className="text-3xl font-bold mb-4">{course.name}</h1>
          <p className='pb-2'>By,<span className=' text-xl text-gray-200 italic'> {course.instructor}</span></p>
          <p>Rs. {course.price}</p>
          <p>Duration: {course.duration}</p>
          <p>Ratings: {course.rating}</p>
          <p className='pt-4'>{course.description}</p>
          <div className='flex items-end justify-end'>
          <img src={course.image}  className="w-40 h-40 object-cover rounded-lg mb-4"/>
          </div>
          </div>
          <div className="flex mt-6 relative -top-50 ">
            <h2 className="text-2xl  text-blue-950  underline font-semibold">Course Info</h2>
          </div>
          <div className="mt-6 relative -top-50">
            <h2 className="text-2xl font-bold">Syllabus</h2>
            <ul className="list-disc pl-5 pt-2 font-semibold ">
              {course.syllabus.map((item, index) => (
                <li key={index} className="py-1">{item}</li>
              ))}
            </ul>
          </div>
    
          <div className="mt-6 relative bottom-50">
            <h2 className="text-2xl font-bold">Category</h2>
            <p className='text-xl pt-3'>{course.category}</p>
          </div>
    
          <div className="mt-6  relative bottom-50">
            <button className="bg-blue-900 text-white py-2 px-6 rounded-full">
              Enroll Now
            </button>
            <button className="bg-yellow-400 text-white ml-2 py-2 px-6 rounded-full">
          Add to Cart
        </button>
          </div>
        </div>
      );
    }
    
    export default CourseDetail;
