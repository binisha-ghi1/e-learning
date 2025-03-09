import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

// Team data (You can replace these with actual team data)
const teamMembers = [
  {
    name: 'Henry Smith',
    role: 'Founder',
    image: 'path/to/founder.png',
    socialLinks: {
      facebook: '#',
      instagram: '#',
      linkedin: '#',
    }
  },
  {
    name: 'Nancy White',
    role: 'Manager',
    image: 'path/to/nana.png',
    socialLinks: {
      facebook: '#',
      instagram: '#',
      linkedin: '#',
    }
  },
  {
    name: 'Henry Smith',
    role: 'Marketing Head',
    image: 'path/to/henry.png',
    socialLinks: {
      facebook: '#',
      instagram: '#',
      linkedin: '#',
    }
  },
  {
    name: 'Nancy White',
    role: 'Designer',
    image: 'ccr.png',
    socialLinks: {
      facebook: '#',
      instagram: '#',
      linkedin: '#',
    }
  }
];

const Team = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="text-center bg-blue-950 text-white rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg p-6"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 border-4 border-blue-600 rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
            <div className="flex flex-row items-center justify-center gap-4 mt-4 mb-4">
              <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook className="cursor-pointer transition-transform transform hover:scale-110 hover:text-blue-600" />
              </a>
              <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="cursor-pointer transition-transform transform hover:scale-110 hover:text-pink-600" />
              </a>
              <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="cursor-pointer transition-transform transform hover:scale-110 hover:text-blue-500" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;



