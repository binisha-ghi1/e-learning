import { useParams } from 'react-router-dom';
import star from '../../assets/images/star.png'





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
        <div className="course-detail p-8">
            <img src={star} alt="" className="w-full" />
            <div className='flex flex-col relative bottom-100 pl-10 text-white'>
          <h1 className="text-3xl font-bold mb-4">{course.name}</h1>
          <p><strong>By, </strong> {course.instructor}</p>
          <p><strong>Rs.</strong> {course.price}</p>
          <p><strong>Duration: </strong>  {course.duration}</p>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Course Description</h2>
            
          </div>
    
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Syllabus</h2>
            <ul className="list-disc pl-5">
              {course.syllabus.map((item, index) => (
                <li key={index} className="py-1">{item}</li>
              ))}
            </ul>
          </div>
    
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Category</h2>
            <p>{course.category}</p>
          </div>
    
          <div className="mt-6">
            <button className="bg-indigo-600 text-white py-2 px-6 rounded-full">
              Enroll Now
            </button>
          </div>
        </div>
      );
    }
    
    export default CourseDetail;
