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
      <div className='flex flex-col flex-wrap bg-gray-200 items-center text-center relative'>
        <div className='relative w-full '>
          <img src={about} alt="About Us" className='w-full ' />
          <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
            <h1 className='text-4xl font-extrabold'>About Us</h1>
            <p className='text-xl font-medium mt-4 max-w-3xl'>
              Welcome to S.T. Tech, where learning meets innovation. Our mission is to make quality education accessible to 
              everyone, everywhere. With a wide range of expert-designed courses and interactive learning tools, we empower
              individuals to achieve their goals and thrive in their careers. Join our growing community of learners and discover
              a world of knowledge tailored just for you!
            </p>
          </div>
          
        </div>
      </div>

      {/* <div className='flex flex-row items-center justify-center mt-10 gap-8 flex-wrap relative'>
        <div className='relative'>
          <img src={one} alt="" className='w-40 md:w-52'/>
        </div>
        <div className='relative'>
          <img src={two} alt="" className='w-40 md:w-52'/>
        </div>
        <div className='relative'>
          <img src={one} alt="" className='w-40 md:w-52'/>
        </div>
        <div className='relative'>
          <img src={two} alt="" className='w-40 md:w-52'/>
        </div>
      </div> */}

      <div className='flex flex-col px-10 md:px-20 mt-16'>
        <h1 className='text-4xl font-extrabold pb-4 tracking-wide'>Mission</h1>
        <p className='font-medium leading-relaxed text-gray-800'>
          To empower individuals through accessible, high-quality education that
          fosters personal growth, professional development, and lifelong learning. 
          We aim to break barriers to education by delivering innovative, engaging,
          and practical learning experiences to learners worldwide.
        </p>
      </div>

      <div className='flex flex-col md:flex-row gap-10 px-10 md:px-20 mt-16 items-center'>
        <img src={learn} alt="Learning" className='w-full max-w-[400px]' />
        <div className='flex flex-col'>
          <h1 className='text-4xl font-extrabold pb-4 tracking-wide'>Vision</h1>
          <p className='font-medium leading-relaxed text-gray-800'>
            To be a global leader in e-learning, transforming lives by making
            education universally available, bridging the gap between knowledge and 
            opportunity, and nurturing a community of empowered, skilled, and 
            confident individuals.
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

      <div className='flex flex-col mt-10 text-center'>
        <p className='text-3xl font-medium'>From a small team to a global platform</p>
        <div className='flex flex-col pt-10'>
          <Student />
        </div>
        <div className='flex items-center justify-center pt-20'>
          <Team />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs;



