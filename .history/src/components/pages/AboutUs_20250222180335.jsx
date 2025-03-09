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
        <h1 className='text-4xl text-white font-extrabold relative bottom-100 text-center'>About Us</h1>
        <p className='text-xl text-white font-medium relative bottom-90 text-center'>
          Welcome to S.T. Tech, where learning meets innovation. Our mission is to make quality education accessible to 
          <br/>everyone, everywhere. With a wide range of expert-designed courses and interactive learning tools, we empower
          <br/>individuals to achieve their goals and thrive in their careers. Join our growing community of learners and discover
          <br/>a world of knowledge tailored just for you!
        </p>
      </div>

      <div className='flex flex-row items-center justify-center relative bottom-70 gap-18'>
        <img src={one} alt="" />
        <img src={two} alt="" />
        <img src={one} alt="" />
        <img src={two} alt="" />
      </div>

      <div className='flex flex-col pl-20 bg-gray-200'>
        <h1 className='text-4xl font-extrabold pb-8'>Mission</h1>
        <p className='font-medium'>
          To empower individuals through accessible, high-quality education that
          <br/>fosters personal growth, professional development, and lifelong learning. 
          <br/>We aim to break barriers to education by delivering innovative, engaging,
          <br/>and practical learning experiences to learners worldwide.
        </p>
      </div>

      <div className='flex flex-row gap-20 pl-20 pt-30 bg-gray-200'>
        <img src={learn} alt="" />
        <div className='flex flex-col'>
          <h1 className='text-4xl font-extrabold pb-8'>Vision</h1>
          <p className='font-medium'>
            To be a global leader in e-learning, transforming lives by making
            <br/>education universally available, bridging the gap between knowledge and 
            <br/>opportunity, and nurturing a community of empowered, skilled, and 
            <br/>confident individuals.
          </p>
        </div>
      </div>

      {/* Centered Success Stories Section */}
      <div className="flex flex-col items-center mt-20 text-center">
        <img src={meeting} alt="Meeting" className="w-full shadow-lg" />
        <h1 className="text-2xl font-bold bg-gray-300 px-8 py-3 rounded-full relative -top-6 w-fit">
          Success Stories
        </h1>
      </div>

      <div className='flex flex-col mt-10'>
        <p className='text-3xl font-medium text-center'>From a small team to a global platform</p>
        <div className=' bg-gray-200 flex flex-col pt-20 text-center'>
        <div>
          <Student />
        </div>
      </div>
        <div>
          <h1 className='text-3xl pt-8 font-medium text-center'>Our Team</h1>
          <div className=' bg-gray-200 flex items-center justify-center pt-20 flex-row'>
        <Team />
      </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs;


