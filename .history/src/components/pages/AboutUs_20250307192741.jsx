import about from '../../assets/images/about.png'
import one from '../../assets/images/one.png'
import two from '../../assets/images/two.png'
import learn from '../../assets/images/learn.png'
import meeting from '../../assets/images/meeting.png'
import Team from '../Team/Team';
import Student from '../Student/Student';
import Footer from '../Footer/Footer';

const AboutUs = () => {
  return (
    <div className='bg-gray-200 flex-wrap'>
      <div className='flex flex-col flex-wrap bg-gray-200'>
        <img src={about} alt="" />
        <h1 className='text-4xl text-black font-extrabold relative mt-[-100px] text-center'>
          About Us
        </h1>
        <p className='text-xl text-black font-medium relative mt-[-90px] text-center'>
          Welcome to S.T. Tech, where learning meets innovation. Our mission is to make quality education accessible to 
          <br/>everyone, everywhere. With a wide range of expert-designed courses and interactive learning tools, we empower
          <br/>individuals to achieve their goals and thrive in their careers. Join our growing community of learners and discover
          <br/>a world of knowledge tailored just for you!
        </p>
      </div>

      <div className='flex flex-row items-center justify-center relative mt-[-70px] gap-8'>
        <img src={one} alt="" />
        <img src={two} alt="" />
        <img src={one} alt="" />
        <img src={two} alt="" />
      </div>

      <div className='flex flex-col px-10 md:px-20 bg-gray-200'>
        <h1 className='text-4xl font-extrabold pb-8 tracking-wide'>
          Mission
        </h1>
        <p className='font-medium leading-relaxed'>
          To empower individuals through accessible, high-quality education that
          <br/>fosters personal growth, professional development, and lifelong learning. 
          <br/>We aim to break barriers to education by delivering innovative, engaging,
          <br/>and practical learning experiences to learners worldwide.
        </p>
      </div>

      <div className='flex flex-row gap-20 px-10 md:px-20 pt-30 bg-gray-200'>
        <img src={learn} alt="" />
        <div className='flex flex-col'>
          <h1 className='text-4xl font-extrabold pb-8 tracking-wide'>
            Vision
          </h1>
          <p className='font-medium leading-relaxed'>
            To be a global leader in e-learning, transforming lives by making
            <br/>education universally available, bridging the gap between knowledge and 
            <br/>opportunity, and nurturing a community of empowered, skilled, and 
            <br/>confident individuals.
          </p>
        </div>
      </div>

      {/* Centered Success Stories Section */}
      <div className="flex flex-col items-center mt-20 text-center">
        <img src={meeting} alt="Meeting" className="w-full max-w-[600px] shadow-lg" />
        <h1 className="text-2xl font-bold bg-gray-300 px-8 py-3 rounded-full relative -top-6 w-fit">
          Success Stories
        </h1>
      </div>

      <div className='flex flex-col mt-10'>
        <p className='text-3xl font-medium text-center'>From a small team to a global platform</p>
        <div className='bg-gray-200 flex flex-col pt-20 text-center'>
          <div>
            <Student />
          </div>
        </div>
        <div>
          <div className='bg-gray-200 flex items-center justify-center pt-20 flex-row'>
            <Team />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs;



