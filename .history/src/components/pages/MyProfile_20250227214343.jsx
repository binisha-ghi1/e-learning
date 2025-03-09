import rec from '../../assets/images/rec.png';
import tag from '../../assets/images/tag.png';

const MyProfile = () => {
  return (
    <>
      {/* Profile Section */}
      <div className="w-full flex justify-center bg-gray-200">
        <div
          className="w-full h-full mt-40 ml-10 mr-10 flex flex-col items-start md:items-center justify-center bg-center px-6 py-16 text-white rounded-xl relative"
          style={{ backgroundImage: `url(${rec})`, backgroundSize: 'cover' }}
        >
          <h2 className="text-4xl font-bold mb-6 text-left md:text-center">
            Welcome back, <br /> <span className="text-blue-300">Name</span>
          </h2>

          <p className="text-left md:text-center text-lg leading-relaxed max-w-2xl">
            We’re excited to have you here! Dive into your learning journey and make progress  
            toward your goals. Remember, every step counts! <br />
            Check your tasks for today and continue where you left off. Let’s make this a productive session! 
          </p>
          <div className="absolute -top-20 right-6">
            <img src={tag} alt="Tag" className="w-32 md:w-32 lg:w-40" />
          </div>
        </div>
      </div>

      {/* Courses Section - Starts from the next div */}
      <div className="w-full mt-16 flex flex-row items-center gap-8">
        <div className="w-full text-center">
          <h1 className="text-2xl font-semibold">Enrolled Courses</h1>
        </div>
        <div className="w-full text-center">
          <h1 className="text-2xl font-semibold">Active Courses</h1>
        </div>
        <div className="w-full text-center">
          <h1 className="text-2xl font-semibold">Completed Courses</h1>
        </div>
      </div>
    </>
  );
};

export default MyProfile;




