import founder from '../../assets/images/founder.png';
import nana from '../../assets/images/nana.png';
import henry from '../../assets/images/henry.png';
import ccr from '../../assets/images/ccr.png';

const Team = () => {
  return (
    <div className="p-6 ">
      <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Team Member 1 */}
        <div className="text-center bg-gray-200">
          <img src={founder} alt="Henry Smith" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h3 className="font-semibold text-lg">Henry Smith</h3>
          <p className="text-gray-500">Founder</p>
        </div>

        {/* Team Member 2 */}
        <div className="text-center">
          <img src={nana} alt="Nancy White" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h3 className="font-semibold text-lg">Nancy White</h3>
          <p className="text-gray-500">Manager</p>
        </div>

        {/* Team Member 3 */}
        <div className="text-center">
          <img src={henry} alt="Henry Smith" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h3 className="font-semibold text-lg">Henry Smith</h3>
          <p className="text-gray-500">Marketing Head</p>
        </div>

        {/* Team Member 4 */}
        <div className="text-center">
          <img src={ccr} alt="Nancy White" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h3 className="font-semibold text-lg">Nancy White</h3>
          <p className="text-gray-500">Designer</p>
        </div>
      </div>
    </div>
  );
};

export default Team;

