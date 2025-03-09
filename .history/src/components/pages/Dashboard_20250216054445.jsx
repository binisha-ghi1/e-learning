import React from "react";
import { courseList } from "./CourseDetail"; 
import { NavLink } from "react-router-dom";

// Function to extract YouTube video ID
const getYouTubeVideoId = (url) => {
  try {
    const videoId = new URL(url).searchParams.get("v");
    return videoId;
  } catch (error) {
    console.error("Invalid video URL:", url);
    return null;
  }
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-semibold">Course Dashboard</h1>
      </header>

      <main className="container mx-auto p-6">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courseList.map((course, index) => {
            const videoId = getYouTubeVideoId(course.video);

            return (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  className="w-full h-56 object-cover"
                  src={course.image}
                  alt={course.name}
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{course.name}</h2>
                  <p className="text-gray-600">{course.description}</p>

                  {/* Video Embedding */}
                  {videoId ? (
                    <iframe
                      className="mt-4 w-full h-32"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={course.name}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <p className="text-red-500 mt-4">No video available for this course.</p>
                  )}

                  {/* Link to course detail page */}
                  <NavLink to={`/course/${course.id}`} className="mt-4 block text-center bg-blue-500 text-white rounded py-2">
                    View Course
                  </NavLink>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;







