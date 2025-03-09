import { motion } from "framer-motion";
import founder from "../../assets/images/founder.png";
import nana from "../../assets/images/nana.png";
import henry from "../../assets/images/henry.png";
import ccr from "../../assets/images/ccr.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const teamMembers = [
  { name: "Henry Smith", role: "Founder", image: founder },
  { name: "Nancy White", role: "Manager", image: nana },
  { name: "Henry Smith", role: "Marketing Head", image: henry },
  { name: "Nancy White", role: "Designer", image: ccr },
];

const Team = () => {
  return (
    <div className="p-6">
      <motion.h2 
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Team
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="text-center bg-blue-950 text-white p-8 rounded-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
