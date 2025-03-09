import about from '../../assets/images/about.png';
import one from '../../assets/images/one.png';
import two from '../../assets/images/two.png';
import learn from '../../assets/images/learn.png';
import meeting from '../../assets/images/meeting.png';

const AboutUs = () => {
  return (
    <div className="bg-gray-200">
      {/* About Section */}
      <div className="flex flex-col items-center text-center bg-gray-200">
        <img src={about} alt="About" className="w-full" />
        <h1 className="text-4xl text-white font-extrabold relative -mt-20">About Us</h1>
        <p className="text-xl text-white font-medium max-w-4xl mt-4">
          Welcome to S.T. Tech, where learning meets innovation. Our mission is to make quality education accessible to
          everyone, everywhere. With a wide range of expert-designed courses and interactive learning tools, we empower
          individuals to achieve their goals and thrive in their careers. Join our growing community of learners and
          discover a world of knowledge tailored just for you!
        </p>
      </div>

      {/* Images Section */}
      <div className="flex flex-row justify-center gap-6 mt-12">
        <img src={one} alt="One" className="w-48" />
        <img src={two} alt="Two" className="w-48" />
        <img src={one} alt="One" className="w-48" />
        <img src={two} alt="Two" className="w-48" />
      </div>

      {/* Mission Section */}
      <div className="flex flex-col items-start px-20 mt-20">
        <h1 className="text-4xl font-extrabold pb-4">Mission</h1>
        <p className="font-medium text-lg leading-relaxed">
          To empower individuals through accessible, high-quality education that fosters personal growth, professional
          development, and lifelong learning. We aim to break barriers to education by delivering innovative, engaging,
          and practical learning experiences to learners worldwide.
        </p>
      </div>

      {/* Vision Section */}
      <div className="flex flex-row items-center gap-10 px-20 mt-20">
        <img src={learn} alt="Learn" className="w-80" />
        <div>
          <h1 className="text-4xl font-extrabold pb-4">Vision</h1>
          <p className="font-medium text-lg leading-relaxed">
            To be a global leader in e-learning, transforming lives by making education universally available, bridging
            the gap between knowledge and opportunity, and nurturing a community of empowered, skilled, and confident
            individuals.
          </p>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="flex flex-col items-center mt-20">
        <img src={meeting} alt="Meeting" className="w-3/4 rounded-xl shadow-lg" />
        <h1 className="text-center text-2xl font-bold bg-gray-300 px-8 py-3 rounded-full mt-5">
          Success Stories
        </h1>
      </div>

      {/* Additional Success Section */}
      <div className="flex flex-col items-center mt-10">
        <p className="text-3xl font-medium text-center">From a small team to a global platform</p>
        <div className="flex flex-row gap-6 mt-6">
          <img src="" alt="Team 1" className="w-40 h-40 bg-gray-400 rounded-xl" />
          <img src="" alt="Team 2" className="w-40 h-40 bg-gray-400 rounded-xl" />
          <img src="" alt="Team 3" className="w-40 h-40 bg-gray-400 rounded-xl" />
        </div>

        {/* Our Team Section */}
        <div className="mt-10 text-center">
          <h1 className="text-4xl font-extrabold">Our Team</h1>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

