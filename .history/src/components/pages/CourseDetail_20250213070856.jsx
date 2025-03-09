import { useParams } from 'react-router-dom';
import star from '../../assets/images/star.png';


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
    rating: 4.5,
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
      'Design Software (Photoshop, Illustrator)',
      'Creating Designs for Print and Web',
    ],
    rating: "4.3",
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
    rating: 4.7,
    id: 'data-sc
