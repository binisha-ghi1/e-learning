import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import founder from '../../assets/images/founder.png';
import nana from '../../assets/images/nana.png';
import henry from '../../assets/images/henry.png';
import ccr from '../../assets/images/ccr.png';

const Team = () => {
  const teamMembers = [
    {
      name: "Henry Smith",
      role: "Founder",
      image: founder,
      facebook: "#",
      instagram: "#",
      linkedin: "#"
    },
    {
      name: "Nancy White",
      role: "Manager",
      image: nana,
      facebook: "#",
      instagram: "#",
      linkedin: "#"
    },
    {
      name: "Henry Smith",
      role: "Marketing Head",
      image: henry,
      facebook: "#",
      instagram: "#",
      linkedin: "#"
    },
    {
      name: "Nancy White",
      role: "Designer",
      image: ccr,
      facebook: "#",
      instagram: "#",
      linkedin: "#"
    }
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Dynamically render team members */}
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center bg-blue-950 text-white rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg p-6">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 border-4 border-blue-600 rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
            <div className="flex flex-row items-center justify-center gap-4 mt-4 mb-4">
              <a href={member.facebook} className="cursor-pointer transition-transform transform hover:scale-110 hover:text-blue-600">
                <FaFacebook />
              </a>
              <a href={member.instagram} className="cursor-pointer transition-transform transform hover:scale-110 hover:text-pink-600">
                <FaInstagram />
              </a>
              <a href={member.linkedin} className="cursor-pointer transition-transform transform hover:scale-110 hover:text-blue-500">
                <FaLinkedin />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;



