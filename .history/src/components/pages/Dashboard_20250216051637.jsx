import React from 'react';
import { NavLink } from 'react-router-dom';
import { courseList } from './courseList';  // Importing the courseList

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






