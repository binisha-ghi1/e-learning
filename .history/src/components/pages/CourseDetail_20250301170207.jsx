import { useParams } from 'react-router-dom';
import star from '../../assets/images/star.png';
import { useState } from 'react';
import Footer from '../Footer/Footer';


// Import course images
import ui from '../../assets/images/ui.png';
import python from '../../assets/images/python.png';
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
import { FaStar } from "react-icons/fa6";

export const courseList = [
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
      'Design Software (Photo-shop, Illustrator)',
      'Creating Designs for Print and Web',
    ],
    rating: '4.3',
    id: 'graphic-design',
    video: 'https://www.youtube.com/watch?v=dFSia1LZI4Y'
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
    id: 'data-science',
    video: 'https://www.youtube.com/watch?v=X3paOmcrTjQ'
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
    id: 'mern-stack',
    video: 'https://www.youtube.com/watch?v=SycSR-NuDF0'
  },
  { 
    name: 'Web Development', 
    image: web, 
    duration: '3 Months', 
    price: '10,000', 
    instructor: 'John Doe', 
    category: 'IT Courses',
    description: 'Master the art of building responsive websites using HTML, CSS, JavaScript, and React.',
    syllabus: [
      'HTML & CSS Fundamentals',
      'JavaScript Basics & DOM Manipulation',
      'Responsive Design & CSS Frameworks',
      'React.js Fundamentals',
      'Backend Basics with Node.js',
    ],
    rating: '4.8',
    id: 'web-development',
    video: 'https://www.youtube.com/watch?v=5YDVJaItmaY'
  },
  { 
    name: 'Project Management', 
    image: project, 
    duration: '2 Months', 
    price: '8,000', 
    instructor: 'Sarah Johnson', 
    category: 'Business Courses',
    description: 'Learn how to manage projects efficiently, covering Agile, Scrum, and Waterfall methodologies.',
    syllabus: [
      'Introduction to Project Management',
      'Agile and Scrum Methodologies',
      'Risk Management & Budgeting',
      'Project Planning & Execution',
      'Case Studies & Real-world Applications',
    ],
    rating: '4.4',
    id: 'project-management',
    video: 'https://www.youtube.com/watch?v=39_O-AnzTQg'
  },
  { 
    name: 'Digital Marketing', 
    image: digital, 
    duration: '2.5 Months', 
    price: '9,500', 
    instructor: 'Emily Carter', 
    category: 'Marketing Courses',
    description: 'Learn digital marketing strategies including SEO, PPC, social media, and content marketing.',
    syllabus: [
      'Introduction to Digital Marketing',
      'SEO & Keyword Research',
      'Social Media Marketing',
      'Google Ads & PPC',
      'Content Marketing & Copywriting',
    ],
    rating: '4.6',
    id: 'digital-marketing',
    video: 'https://www.youtube.com/watch?v=bixR-KIJKYM'
  },
  { 
    name: 'Brand Management', 
    image: brand, 
    duration: '2 Months', 
    price: '9,000', 
    instructor: 'Michael Brown', 
    category: 'Business Courses',
    description: 'Understand the core principles of branding, positioning, and storytelling.',
    syllabus: [
      'Introduction to Brand Strategy',
      'Market Research & Competitor Analysis',
      'Brand Positioning & Messaging',
      'Creating a Visual Identity',
      'Branding Case Studies',
    ],
    rating: '4.5',
    id: 'brand-management',
    video: 'https://www.youtube.com/watch?v=Hn4r9Byr5BQ'
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
    video: 'https://www.youtube.com/watch?v=tShavGuo0_E'
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
    video: 'https://www.youtube.com/watch?v=JvN-t0PwLaE'
  },
  { 
    name: 'Business Analytics', 
    image: business, 
    duration: '3 Months', 
    price: '10,500', 
    instructor: 'Robert Wilson', 
    category: 'Business Courses',
    description: 'Use data-driven decision-making to improve business performance and strategy.',
    syllabus: [
      'Introduction to Business Analytics',
      'Data Collection & Analysis',
      'Statistical Techniques & Forecasting',
      'Business Intelligence Tools',
      'Case Studies & Real-world Applications',
    ],
    rating: '4.6',
    id: 'business-analytics',
    video: 'https://www.youtube.com/watch?v=-psusaPKLg0'
  },
  { 
    name: 'Python with Django', 
    image: python, 
    duration: '3 Months', 
    price: '10,500', 
    instructor: 'Ethan', 
    category: 'python',
    description: 'Use data-driven decision-making to improve business performance and strategy.',
    syllabus: [
      'Introduction to Python & Django',
      'Python Fundamentals ',
      ' Getting Started with Django',
      'Django Models and Databases',
      'Django Views and Templates',
      'Django Forms and User Input',
      'Django Authentication and Security',
      'Django REST Framework (DRF) for APIs',
      'Advanced Django Concepts',
      'Deploying Django Applications',
    ],
    rating: '4.8',
    id: 'python',
    video: 'https://www.youtube.com/watch?v=rHux0gMZ3Eg'
  }



];

function CourseDetail() {
  const { courseId } = useParams();
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  console.log(courseId); // Debugging line to check the courseId value
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

  const enrollInCourse = (course) => {
    if (!enrolledCourses.some((item) => item.id === course.id)) {
      setEnrolledCourses([...enrolledCourses, course]); 
      alert(`${course.name} enrolled successfully!`);
    } else {
      alert(`${course.name} is already enrolled.`);
    }
  };

  return (
    <div className="  ">
      <div className="relative w-full">
        <img src={star} alt="Course Banner" className="w-full shadow-lg" />
        <div className="absolute top-0 left-0 w-full flex flex-col justify-center p-8 text-white">
          <h1 className="text-3xl font-bold">{course.name}</h1>
          <p className="italic text-gray-300 mt-2">By, {course.instructor}</p>
          <p className="text-lg font-semibold mt-2">Rs. {course.price}</p>
          <p className="text-lg flex flex-row text-yellow-400 font-semibold mt-2">Ratings:  {course.rating} </p>
          <p className='flex flex-row text-yellow-400 text-lg pt-2 gap-2'>  <FaStar/> <FaStar/><FaStar/><FaStar/> </p>
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

      {/* Course Info Section */}
      <div className='text-4xl text-blue-950 font-extrabold pl-6 pt-6 underline'>
        <h1>Course Info</h1>
      </div>
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Course Description */}
          <div>
            <h2 className="text-2xl font-bold text-blue-950">About This Course</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">{course.description}</p>
            <p className='text-gray-700 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iste quaerat distinctio!
            <button className="text-blue-600 font-semibold ml-2" onClick={() => setShowMore(false)}>Show Less</button>
            <button className="text-blue-600 font-semibold ml-2" onClick={() => setShowMore(true)}>Read More</button>
              
              )}
           
               Ea nullaaspernatur sint molestiae optio, architecto, blanditiis, axime harum nihil quis illo at eum aut. Quos, accusantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex facere totam ducimus sapiente quibusdam eaque corrupti velit dolorum, animi neque deserunt veritatis! Aspernatur mollitia consequuntur illo quod totam culpa harum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta similique maiores repellat praesentium velit magni, ipsam laboriosam aliquid maxime libero sunt nulla blanditiis fuga quos vero sequi placeat tenetur eaque?</p>
          </div>
          {/* Course Video */}
          <div>
            <h2 className="text-2xl font-bold text-blue-950">Course Video</h2>
            {videoId ? (
              <iframe
                className="mt-4 w-full h-64 rounded-lg shadow-lg"
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
        </div>
      </div>
      <div className='flex flex-row gap-1o justify-around '>
      <div className='flex flex-row items-center justify-center gap-20'>   
      <div className="mt-10 flex flex-col ">
        <h2 className="text-2xl font-bold">Syllabus</h2>
        <ul className="list-disc  pt-8 font-semibold text-gray-700">
          {course.syllabus.map((item, index) => (
            <li key={index} className="py-1">{item}</li>
          ))}
        </ul>
      </div>
      </div>
      <div className="mt-6 ">
        <h2 className="text-3xl  mt-10  font-bold underline">Category</h2>
        <p className="text-xl  bg-gray-200  w-42 text-center mt-4 font-medium pt-3 pb-3 text-gray-800">{course.category}</p>
        <div className="mt-6 flex mb-10 gap-4">
      <button 
          onClick={() => enrollInCourse(course.id)} 
          className="bg-blue-900 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Enroll Now
        </button>
        <button className="bg-yellow-400 text-blue-950 py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300">
          Add to Cart
        </button>
      </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default CourseDetail;




