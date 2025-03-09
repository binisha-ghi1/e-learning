import rec from '../../assets/images/rec.png';
import tag from '../../assets/images/tag.png';

const MyProfile = () => {
  return (
    <div className="w-full flex justify-center">
      <div
        className="w-full h-fullc flex flex-col items-start md:items-center justify-center bg-center px-6 py-16 text-white rounded-xl relative"
        style={{ backgroundImage: `url(${rec})`, backgroundSize: 'cover' }}
      >
        {/* Welcome Text */}
        <h2 className="text-4xl font-bold mb-6 text-left md:text-center">
          Welcome back, <br /> <span className="text-blue-300">Name</span>
        </h2>
        
        {/* Description */}
        <p className="text-left md:text-center text-lg leading-relaxed max-w-2xl">
          We’re excited to have you here! Dive into your learning journey and make progress  
          toward your goals. Remember, every step counts! <br />
          Check your tasks for today and continue where you left off. Let’s make this a productive session! 🚀
        </p>

        {/* Tag Image - Properly aligned for responsiveness */}
        <div className="absolute top-6 right-6">
          <img src={tag} alt="Tag" className="w-20 md:w-32 lg:w-40" />
        </div>
      </div>
    </div>
  );
};

export default MyProfile;


