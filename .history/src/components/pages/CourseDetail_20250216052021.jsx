import { useParams } from 'react-router-dom';
import { courseList } from './courseList'; // Assuming courseList is in the same folder

export const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courseList.find(course => course.id === courseId);

  if (!course) {
    return <p>Course not found!</p>;
  }

  const videoId = new URL(course.video).searchParams.get("v");

  return (
    <div>
      <h1>{course.name}</h1>
      <p>{course.description}</p>
      <ul>
        {course.syllabus.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <iframe 
          src={`https://www.youtube.com/embed/${videoId}`}
          title={course.name}
          width="560" 
          height="315" 
        ></iframe>
      </div>
      <button>Enroll Now</button>
      <button>Add to Cart</button>
    </div>
  );
};


