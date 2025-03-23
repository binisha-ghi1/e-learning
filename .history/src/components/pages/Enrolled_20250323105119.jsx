import React from 'react';

const Enrolled = ({ enrolledCourses, activateCourse, unenrollCourse }) => {
  console.log("Props received in Enrolled:", { enrolledCourses, activateCourse, unenrollCourse });

  if (!enrolledCourses || enrolledCourses.length === 0) {
    return (
      <div className="text-center text-xl font-bold">
        You haven't enrolled in any courses yet.
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Your Enrolled Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {enrolledCourses.map((course) => (
          <div key={course.id} className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4">{course.name}</h2>
            <p className="mt-2 text-gray-600">Instructor: {course.instructor}</p>
            <p className="mt-2 font-semibold">Duration: {course.duration}</p>
            <div className="flex justify-between mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => activateCourse(course)}
              >
                Move to Active
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => unenrollCourse(course, 'enrolled')}
              >
                Unenroll
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enrolled;










