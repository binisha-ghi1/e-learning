import coat from '../../assets/images/coat.png';
import map from '../../assets/images/map.png';
import { CiPaperplane } from "react-icons/ci";

const Contact = () => {
  return (
    <div className='bg-'>
      {/* Contact Header */}
      <div>
        <img src={coat} alt="" className="src" />
        <h1 className="text-4xl text-center text-white font-extrabold relative bottom-50">Contact Us</h1>
      </div>

      {/* Contact Info */}
      <div className="flex flex-row gap-20 mt-20 justify-center items-center text-lg font-semibold">
        <div>
          <h1>Phone</h1>
        </div>
        <div>
          <h1>Email</h1>
        </div>
        <div>
          <h1>Katmandu</h1>
        </div>
      </div>

      {/* Map & Contact Form Section */}
      <div className="flex flex-row gap-10 mt-20 justify-center items-center px-10">
        {/* Map Image */}
        <img src={map} alt="Map" className="flex-1 w-full h-96 object-cover rounded-lg shadow-lg" />

        {/* Contact Form */}
        <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl text-center font-bold text-blue-950 mb-6">Send Us a Message</h2>
          
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
            
            <button className="bg-blue-900 text-white text-xl py-3 rounded-md flex items-center justify-center gap-2 hover:bg-blue-800 transition duration-300">
              Send Message <CiPaperplane size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;


