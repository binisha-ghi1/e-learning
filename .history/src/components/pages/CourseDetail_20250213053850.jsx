import { useParams } from 'react-router-dom';
import image from '../../assets/images/image'

function CourseDetail() {
  const { courseId } = useParams();

 
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
     <div>
        <img src={image} alt="" className="src" />
     </div>
    </div>
  );
}

export default CourseDetail;
