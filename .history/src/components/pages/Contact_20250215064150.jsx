import coat from '../../assets/images/coat.png';
import map from '../../assets/images/map.png';
import { CiPaperplane } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      {/* Contact Header */}
      <div className="relative w-full">
        <img src={coat} alt="Banner" className="w-full h-64 object-cover" />
        <h1 className="absolute inset-0 flex items-center justify-center text-4xl text-white font-extrabold">Contact Us</h1>
      </div>

      {/* Contact Info Section */}
      <div className="flex flex-row gap-20 mt-10 justify-center items-center text-lg font-semibold">
        <div className="flex flex-col items-center">
          <h2 className="text-gray-800">Phone</h2>
          <p className="text-gray-600">+977-1234567890</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-gray-800">Email</h2>
          <p className="text-gray-600">info@example.com</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-gray-800">Location</h2>
          <p className="text-gray-600">Kathmandu, Nepal</p>
        </div>
      </div>

      {/* Contact Form and Map */}
      <div className="flex flex-col lg:flex-row gap-10 mt-20 items-center justify-center px-10">
        {/* Map Image */}
        <img src={map} alt="Map" className="w-full lg:w-1/2 rounded-lg shadow-lg" />

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full lg:w-1/3">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          
          <form className="flex flex-col gap-4">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <input 
              type="tel" 
              placeholder="Phone Number" 
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <input 
              type="text" 
              placeholder="Subject" 
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <textarea 
              placeholder="Write a message..." 
              rows="4" 
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            
            <button className="bg-blue-600 text-white py-3 rounded-md flex items-center justify-center gap-2 hover:bg-blue-500 transition duration-300">
              Send Message <CiPaperplane size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

