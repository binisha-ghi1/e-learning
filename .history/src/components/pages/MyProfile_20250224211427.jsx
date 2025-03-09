import rec from '../../assets/images/rec.png';
import tag from '../../assets/images/tag.png';

const Profile = () => {
  return (
    <div className="w-full">
      <div
        className="min-w-screen flex flex-col items-center justify-center w-88 bg-center px-6 py-12 text-white rounded-lg"
        style={{ backgroundImage: `url(${rec})` }}
      >
        <h2 className="text-3xl text-start font-bold mb-6">
          Welcome back, <br /> Name
        </h2>
        <p className="text-center">
          We’re excited to have you here. Dive into your learning journey and make progress <br />
          toward your goals. Remember, every step counts! Check your tasks for today and <br />
          continue where you left off. Let’s make this a productive session!
        </p>
        <img
          src={tag}
          alt="Tag"
          className="relative justify-end text-end bottom-60 w-42"
        />
      </div>
    </div>
  );
};

export default Profile;
