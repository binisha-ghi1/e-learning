import React from 'react';

const coursesList = [
  { id: 1, title: 'Web Development', description: 'Learn how to build modern web applications.' },
  { id: 2, title: 'Data Science', description: 'Analyze data and build machine learning models.' },
  { id: 3, title: 'Cybersecurity', description: 'Protect systems and networks from cyber threats.' },
  { id: 4, title: 'Networking Basics', description: 'Understand the fundamentals of computer networks.' },
  { id: 5, title: 'Cloud Computing', description: 'Learn about cloud services and deployment models.' }
];

const Courses = () => {
  return (
    <div className="bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-6">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coursesList.map((course) => (
          <div key={course.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-gray-600 mt-2">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
export { coursesList };
