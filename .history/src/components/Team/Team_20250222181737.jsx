import founder from "../../assets/images/founder.png";
import nana from "../../assets/images/nana.png";
import henry from "../../assets/images/henry.png";
import ccr from "../../assets/images/ccr.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Footer from "../Footer/Footer";

const teamMembers = [
  { name: "Henry Smith", role: "Founder", image: founder },
  { name: "Nancy White", role: "Manager", image: nana },
  { name: "Henry Smith", role: "Marketing Head", image: henry },
  { name: "Nancy White", role: "Designer", image: ccr },
];

const Team = () => {
  return (
    <div>
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="text-center bg-blue-950 text-white p-8 rounded-2xl transform transition duration-300 hover:scale-105"
          >
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-52 h-52 border-4 border-blue-600 rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
            <div className="flex flex-row items-center justify-center gap-4 mt-4 mb-4">
              <FaFacebook className="cursor-pointer hover:text-blue-400 transition duration-300" />
              <FaInstagram className="cursor-pointer hover:text-pink-400 transition duration-300" />
              <FaLinkedin className="cursor-pointer hover:text-blue-300 transition duration-300" />
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Team;

