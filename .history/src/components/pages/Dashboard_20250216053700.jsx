import React from "react";

// Example course data array
const courses = [
  {
    title: "Course 1",
    description: "Description of Course 1",
    thumbnail: "path_to_video_thumbnail_1.jpg",
  },
  {
    title: "Course 2",
    description: "Description of Course 2",
    thumbnail: "path_to_video_thumbnail_2.jpg",
  },
  {
    title: "Course 3",
    description: "Description of Course 3",
    thumbnail: "path_to_video_thumbnail_3.jpg",
  },
  // Add more courses here...
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-semibold">Course Dashboard</h1>
      </header>

      <main className="container mx-auto p-6">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Dynamically render courses */}
          {courses.map((course, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-56 object-cover"
                src={course.thumbnail}
                alt={course.title}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{course.title}</h2>
                <p className="text-gray-600">{course.description}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                  Watch Now
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;






