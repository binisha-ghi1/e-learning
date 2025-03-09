import founder from '../../assets/images/founder.png';
import nana from '../../assets/images/nana.png';
import henry from '../../assets/images/henry.png';
import ccr from '../../assets/images/ccr.png';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Team = () => {
  return (
    <div className="p-6 ">
      <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 ">
        {/* Team Member 1 */}
        <div className="text-center bg-blue-950 text-white rounded-2xl">
          <img src={founder} alt="Henry Smith" className="w-52 h-52  border-4 border-blue-600 rounded-full mx-auto mb-4" />
          <h3 className="font-semibold text-lg">Henry Smith</h3>
          <p className="text-gray-500">Founder</p>
          <div className='flex flex-row items-center justify-center gap-4 mt-4 mb-4'>
             <FaFacebook className=" cursor-pointer" />
                    <FaInstagram className=" cursor-pointer" />
                    <FaLinkedin className=" cursor-pointer" />
                    </div>
         
        </div>

        {/* Team Member 2 */}
        <div className="text-center bg-blue-950 text-white rounded-2xl">
          <img src={nana} alt="Nancy White" className="w-52 h-52 border-4 border-blue-600 rounded-full mx-auto mb-4" />
          <h3 className="font-semibold text-lg">Nancy White</h3>
          <p className="text-gray-500">Manager</p>
          <div className='flex flex-row items-center justify-center gap-4 mt-4 mb-4'>
             <FaFacebook className=" cursor-pointer" />
                    <FaInstagram className=" cursor-pointer" />
                    <FaLinkedin className=" cursor-pointer" />
                    </div>
        </div>

        {/* Team Member 3 */}
        <div className="text-center bg-blue-950 text-white  rounded-2xl">
          <img src={henry} alt="Henry Smith" className="w-52 h-52 border-4  border-blue-600 rounded-full mx-auto mb-4" />
          <h3 className="font-semibold text-lg">Henry Smith</h3>
          <p className="text-gray-500">Marketing Head</p>
          <div className='flex flex-row items-center justify-center gap-4 mt-4 mb-4'>
             <FaFacebook className=" cursor-pointer" />
                    <FaInstagram className=" cursor-pointer" />
                    <FaLinkedin className=" cursor-pointer" />
                    </div>        </div>

        {/* Team Member 4 */}
        <div className="text-center bg-blue-950 text-white pl-4 pr-4 pt-4 rounded-2xl">
          <img src={ccr} alt="Nancy White" className="w-52 h-52  border-4 border-blue-600 rounded-full mx-auto mb-4" />
          <h3 className="font-semibold text-lg">Nancy White</h3>
          <p className="text-gray-500">Designer</p>
          <div className='flex flex-row items-center justify-center gap-4 mt-4 mb-4'>
             <FaFacebook className=" cursor-pointer" />
                    <FaInstagram className=" cursor-pointer" />
                    <FaLinkedin className=" cursor-pointer" />
                    </div>
        </div>
      </div>
    </div>
  );
};

export default Team;