import { FaStar } from "react-icons/fa6";
import eye from '../../assets/images/eye.png';
import ear from '../../assets/images/ear.png';
import nose from '../../assets/images/nose.png';

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
    <div className="text-center">
      <div className="flex items-center justify-center gap-12">
        {students.map((student, index) => (
          <div key={index} className="flex flex-col bg-gray-200 font-medium p-6 rounded-lg">
            <img
              src={student.image}
              alt={`${student.name}'s photo`}
              className="w-42 mx-auto mb-4"
            />
            <div className="flex justify-center gap-1 text-3xl text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <h1 className="text-2xl pt-4 pb-2 text-blue-950 font-medium">{student.name}</h1>
            <p className="text-lg text-gray-700">{student.role}</p>
            <p className="pt-4 pb-4 text-gray-500 px-5">{student.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Student;
