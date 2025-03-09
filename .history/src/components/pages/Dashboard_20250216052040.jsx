import { NavLink } from 'react-router-dom';
import { courseList } from './courseList'; // Assuming courseList is in the same folder

const Dashboard = () => {
  return (
    <div>
      <h1>Course Dashboard</h1>
      <div>
        {courseList.map((course) => (
          <div key={course.id}>
            <img src={course.image} alt={course.name} />
            <h2>{course.name}</h2>
            <p>{course.description}</p>
            <iframe 
              src={`https://www.youtube.com/embed/${new URL(course.video).searchParams.get('v')}`} 
              title={course.name} 
              width="560" 
              height="315" 
            />
            <NavLink to={`/course/${course.id}`}>View Course Details</NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;







