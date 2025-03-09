import React, { useState } from "react";
import { courseList } from "./CourseDetail"; 

const getYouTubeVideoId = (url) => {
  try {
    const videoId = new URL(url).searchParams.get("v");
    return videoId;
  } catch (error) {
    console.error("Invalid video URL:", url);
    return null;
  }
};

const Resources = () => {
  const [activeSection, setActiveSection] = useState("Courses Videos");

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-xl font-semibold text-center text-gray-800 mb-8">
        Course Videos 
      </h1>

      {activeSection === "Courses Videos" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courseList.map((course, index) => {
            const videoId = getYouTubeVideoId(course.video);
            return (
              <div 
                key={index} 
                className="bg-white shadow-xl rounded-2xl overflow-hidden transition-all hover:shadow-2xl"
              >
                {/* Course Image */}
                <img
                  className="w-full h-56 object-cover rounded-t-2xl"
                  src={course.image}
                  alt={course.name}
                />
                <div className="p-5">
                  {/* Course Name */}
                  <h2 className="text-lg font-semibold text-center bg-blue-500 text-white rounded py-2 w-full">
                    {course.name}
                  </h2>

                  {/* Embedded Video */}
                  {videoId ? (
                    <iframe
                      className="mt-4 w-full aspect-video rounded-lg"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={course.name}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <p className="text-red-500 mt-4 text-center">
                      No video available for this course.
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Resources;

