import React, { useState } from 'react';
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
  const [activeSection, setActiveSection] = useState("Courses Videos"); // ✅ Define activeSection

  return (
    <div>
      {activeSection === "Courses Videos" && (
        <div className="flex flex-wrap gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
                    <h2 className="mt-4 text-center bg-blue-500 text-white rounded py-2 w-full">
                      {course.name}
                    </h2>

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
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Resources;

