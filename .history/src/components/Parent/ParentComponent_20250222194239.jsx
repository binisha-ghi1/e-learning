import { useState } from "react";
import Dashboard from "./Dashboard";

const ParentComponent = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([1, 2]); // Example enrolled course IDs

  // Function to add course to enrolled courses
  const enrollCourse = (courseId) => {
    setEnrolledCourses((prevCourses) => [...prevCourses, courseId]);
  };

  return (
    <div>
      <h1>Course Enrollment</h1>
      {/* Button to simulate enrolling a new course */}
      <button onClick={() => enrollCourse(3)}>Enroll in Course 3</button>

      {/* Pass enrolledCourses state to Dashboard */}
      <Dashboard enrolledCourses={enrolledCourses} />
    </div>
  );
};

export default ParentComponent;
