import React from 'react';

const Active = ({ activeCourses }) => {
  if (activeCourses.length === 0) {
    return (
      <div className="text-center text-xl font-bold">
        No active courses at the moment.
      </div>
    );
  }

  // Calculate the progress as a percentage of completed or active courses
  const totalCourses = activeCourses.length;
  const progress = Math.min(totalCourses, 100); // For demo, progress is set to 100% (can be calculated based on some condition)

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Active Courses</h1>
      <div className="flex flex-row justify-start gap-8">
        {/* Courses Section */}
        <div className="w-full md:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {activeCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out"
              >
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold">{course.name}</h2>
                <p className="mt-2 text-gray-600">{course.instructor}</p>
                <p className="mt-2 font-semibold">Duration: {course.duration}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar Section */}
        <div className="w-full md:w-1/3 mt-8 md:mt-0 flex justify-end">
          <h2 className="text-2xl font-semibold text-center mb-4">Progress</h2>
          <div className="w-full bg-gray-200 rounded-full h-6">
            <div
              className="bg-blue-500 h-6 rounded-full text-center text-white font-semibold"
              style={{ width: `${progress}%` }}
            >
              {progress}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Active;









