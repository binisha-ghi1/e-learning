import { FaStar } from "react-icons/fa6";
import eye from '../../assets/images/eye.png';
import ear from '../../assets/images/ear.png';
import nose from '../../assets/images/nose.png';
import Footer from "../Footer/Footer";

const students = [
  {
    name: "James White",
    role: "Student",
    review: "Amazing platform! The lessons are clear, and the instructors are top-notch.",
    image: eye,
  },
  {
    name: "Jack Grey",
    role: "Student",
    review: "The course exceeded my expectations. I can’t wait to take another one!",
    image: ear,
  },
  {
    name: "Nancy Nancy",
    role: "Student",
    review: "The courses are well-structured and easy to follow. I learned so much!",
    image: nose,
  },
];

const Student = () => {
  return (
    <div></div>
    <div className="text-center mb-20 mt-20">
      <div className="flex items-center justify-center gap-6 flex-wrap">
        {students.map((student, index) => (
          <div
            key={index}
            className="flex flex-col bg-white font-medium p-4 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg w-72" // Adjusted width to make it smaller
          >
            <img
              src={student.image}
              alt={`${student.name}'s photo`}
              className="w-32 h-32 mx-auto mb-4 relative bottom-20" // Adjusted image position with relative bottom
            />
            <div className="flex justify-center gap-1 text-3xl text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <h1 className="text-xl pt-2 pb-2 text-blue-950 font-medium">{student.name}</h1>
            <p className="text-lg text-gray-700">{student.role}</p>
            <p className="pt-2 pb-4 text-gray-500 px-4">{student.review}</p>
          </div>
        ))}
      </div>
   
    </div>
  );
};

export default Student;


