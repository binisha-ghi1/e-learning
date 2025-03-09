import coat from '../../assets/images/coat.png';
import map from '../../assets/images/map.png';
import { CiPaperplane } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { IoIosCall } from "react-icons/io";
import Footer from '../Footer/Footer';


const Contact = () => {
  return (
    <div className="bg-gray-200 pb-20">
      <div className="relative">
        <img src={coat} alt="Coat" className="w-full " />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <IoIosCall className="text-white text-6xl mb-3 animate-bounce" />
          <h1 className="text-5xl text-white font-extrabold animate-fadeIn">Contact Us</h1>
        </div>
      </div>

     
      <div className="flex flex-row gap-10 mt-20 justify-center items-center text-lg font-semibold">
        {[
          { icon: <FiPhoneCall />, title: "Phone", details: ["+977 9813000012", "+977 9822000012"] },
          { icon: <MdOutlineMarkEmailUnread />, title: "Email", details: ["binisha@gmail.com"] },
          { icon: <SlLocationPin />, title: "Location", details: ["Koteshwor", "Kathmandu"] }
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-300 w-64 h-40 flex flex-col justify-center items-center text-center p-6 rounded-xl border-2 border-blue-950 shadow-2xl shadow-blue-900  transform hover:scale-105 transition duration-300"
          >
            <div className="text-blue-950 text-4xl mb-2 flex justify-center">{item.icon}</div>
            <h1 className="text-blue-950 text-2xl font-bold pb-2">{item.title}</h1>
            {item.details.map((line, i) => (
              <p key={i} className="text-gray-700">{line}</p>
            ))}
          </div>
        ))}
      </div>

      {/* Map & Contact Form Section */}
      <div className="flex flex-row gap-10 mt-40 justify-center items-center px-10">
        {/* Map Image */}
        <div className="w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10488.777485450102!2d85.34282895596081!3d27.670556269639885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1737472831890!5m2!1sen!2snp"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map Location"
            className="rounded-l-lg"
          ></iframe>
        </div>

      
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
            
            <button className="bg-blue-950 text-white text-xl py-3 rounded-md flex items-center justify-center gap-2 hover:bg-blue-800 transform hover:scale-105 transition duration-300">
              Send Message <CiPaperplane size={20} />
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;





