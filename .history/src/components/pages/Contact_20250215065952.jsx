import coat from '../../assets/images/coat.png';
import map from '../../assets/images/map.png';
import { CiPaperplane } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const Contact = () => {
  return (
    <div className="bg-gray-200 pb-20">
      {/* Contact Header */}
      <div className="relative">
        <img src={coat} alt="Coat" className="w-full h-60 object-cover opacity-70" />
        <h1 className="text-5xl text-center text-white font-extrabold absolute inset-0 flex justify-center items-center animate-fadeIn">
          Contact Us
        </h1>
      </div>

      {/* Contact Info Cards */}
      <div className="flex flex-row gap-10 mt-20 justify-center items-center text-lg font-semibold">
        {[
          { icon: <FiPhoneCall />, title: "Phone", details: ["+977 9813000012", "+977 9822000012"] },
          { icon: <MdOutlineMarkEmailUnread />, title: "Email", details: ["binisha@gmail.com"] },
          { icon: <SlLocationPin />, title: "Location", details: ["Koteshwor", "Kathmandu"] }
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-300 w-56 text-center p-6 rounded-xl border-2 border-blue-950 shadow-lg transform hover:scale-105 transition duration-300"
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
      <div className="flex flex-row gap-10 mt-20 justify-center items-center px-10">
        {/* Map Image */}
        <img src={map} alt="Map" className="flex-1 w-full h-96 object-cover rounded-xl shadow-lg" />

        {/* Contact Form */}
        <div className="flex-1 bg-white p-8 rounded-2xl shadow-xl transform hover:scale-[1.02] transition duration-300">
          <h2 className="text-2xl text-center font-bold text-blue-950 mb-6">Send Us a Message</h2>

          <form className="flex flex-col gap-4">
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
              rows="4"
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


