import React from 'react';

const EnrolledCourses = () => {
  const courses = [
    { id: 1, name: 'UI/UX Design', progress: 56, totalLessons: 24, completedLessons: 12 },
    { id: 2, name: 'MERN Stack', progress: 32, totalLessons: 36, completedLessons: 10 },
    { id: 3, name: 'Web Development', progress: 78, totalLessons: 28, completedLessons: 22 }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">My Enrolled Courses</h2>
      <div className="space-y-4">
        {courses.map(course => (
          <div key={course.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">{course.name}</h3>
              <span className="text-sm text-gray-600">
                {course.completedLessons}/{course.totalLessons} lessons
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full" 
                style={{ width: `${course.progress}%` }}
              />
            </div>
            <div className="mt-2 text-right text-sm text-gray-600">
              {course.progress}% Complete
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;