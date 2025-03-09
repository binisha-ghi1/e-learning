import { useParams } from 'react-router-dom';

function CourseDetail() {
  const { courseId } = useParams();

  // Find the course by its ID
  const course = courseList.find(course => course.id === courseId);

  if (!course) {
    return <p>Course not found!</p>;
  }

  return (
    <div className="course-detail">
      <h1>{course.name}</h1>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Price:</strong> {course.price}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p>{course.description}</p>
      {/* Add other detailed course information as needed */}
    </div>
  );
}

export default CourseDetail;
