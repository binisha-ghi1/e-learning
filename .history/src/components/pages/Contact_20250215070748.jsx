import coat from '../../assets/images/coat.png';
import map from '../../assets/images/map.png';
import { CiPaperplane } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { IoIosCall } from "react-icons/io";

const Contact = () => {
  return (
    <div className="bg-gray-200 pb-20">
      {/* Contact Header */}
      <div className="relative">
        <img src={coat} alt="Coat" className="w-full h-60 object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <IoIosCall className="text-white text-6xl mb-3 animate-bounce" />
          <h1 className="text-5xl text-white font-extrabold animate-fadeIn">Contact Us</h1>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="flex flex-row gap-10 mt-20  justify-center items-center text-lg font-semibold">
        {[
          { icon: <FiPhoneCall />, title: "Phone", details: ["+977 9813000012", "+977 9822000012"] },
          { icon: <MdOutlineMarkEmailUnread />, title: "Email", details: ["binisha@gmail.com"] },
          { icon: <SlLocationPin />, title: "Location", details: ["Koteshwor", "Kathmandu"] }
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-300 flex-1 max-w-xs text-center p-6 rounded-xl border-2 border-blue-950 shadow-lg transform hover:scale-105 transition duration-300"
          >
            <div className="text-blue-950 text-4xl mb-3">{item.icon}</div>
            <h1 className="text-blue-950 text-2xl font-bold pb-2">{item.title}</h1>
            {item.details.map((line, i) => (
              <p key={i} className="text-gray-700">{line}</p>
            ))}
          </div>
        ))}
      </div>

      {/* Map & Contact Form Section */}
      <div className="flex flex-row gap-20 mt-20 justify-center items-center px-10">
        {/* Map Image */}
        <div className="flex-1 flex flex-col items-center max-w-md">
          <img src={map} alt="Map" className="w-full h-80 object-cover rounded-xl shadow-lg" />
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-white p-6 rounded-2xl shadow-xl max-w-md transform hover:scale-[1.02] transition duration-300">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">Send Us a Message</h2>
          </div>

          <form className="flex flex-col gap-3">
            {["Full Name", "Email Address", "Phone Number", "Subject"].map((placeholder, i) => (
              <input
                key={i}
                type={i === 1 ? "email" : i === 2 ? "tel" : "text"}
                placeholder={placeholder}
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-300 hover:shadow-md"
              />
            ))}
            <textarea
              placeholder="Write a message..."
              rows="3"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-300 hover:shadow-md"
            />
            
            <button className="bg-blue-900 text-white text-xl py-3 rounded-md flex items-center justify-center gap-2 hover:bg-blue-800 transform hover:scale-105 transition duration-300">
              Send Message <CiPaperplane size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;




