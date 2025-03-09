import React from 'react';
import { NavLink } from 'react-router-dom';
import { courseList } from './CourseDetail';

const Dashboard = () => {
  // Function to extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    try {
      const videoId = new URL(url).searchParams.get("v");
      return videoId;
    } catch (error) {
      console.error("Invalid video URL:", url);
      return null;
    }
  };

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
    }
  ];
  

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-10">Course Videos Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courseList.map((course) => {
          const videoId = getYouTubeVideoId(course.video);
          
          return (
            <div key={course.id} className="bg-white shadow-lg rounded-lg p-5">
              {/* Course Image */}
              <img src={course.image} alt={course.name} className="w-full h-48 object-cover rounded-lg mb-4" />

              <h2 className="text-2xl font-semibold mb-2">{course.name}</h2>
              <p className="text-gray-700">{course.description}</p>

              <div className="mt-4">
                {/* Display Course Video */}
                {videoId ? (
                  <iframe
                    className="w-full h-40"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={course.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <p className="text-red-500 mt-2">No video available for this course.</p>
                )}
              </div>

              {/* Link to Course Detail Page */}
              <div className="mt-4">
                <NavLink to={`/course/${course.id}`} className="text-blue-500 hover:underline">
                  View Course Details
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;





