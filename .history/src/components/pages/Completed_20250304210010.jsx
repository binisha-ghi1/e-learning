import React from 'react';

const Completed = ({ completedCourses }) => {
  if (completedCourses.length === 0) {
    return (
      <div className="text-center text-xl font-bold">
        No courses completed yet.
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Completed Courses</h1>
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold">Courses Completed: {completedCourses.length}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {completedCourses.map((course) => (
          <div key={course.id} className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4">{course.name}</h2>
            <p className="mt-2 text-gray-600">{course.instructor}</p>
            <p className="mt-2 font-semibold">Duration: {course.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Completed;

