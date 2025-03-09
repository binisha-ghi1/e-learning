import about from '../../assets/images/about.png'
import one from '../../assets/images/one.png'
import two from '../../assets/images/two.png'

const AboutUs = () => {
  return (
    <div>
      <div className='flex flex-col flex-wrap'>
        <img src={about} alt="" />
        <source />
       <h1 className='text-4xl text-white font-extrabold relative bottom-100 text-center'>About Us</h1>
       <p className=' text-xl text-white font-medium relative bottom-90 text-center'>Welcome to S.T. Tech, where learning meets innovation. Our mission is to make quality education accessible to <br/>everyone, everywhere. With a wide range of expert-designed courses and interactive learning tools, we empower<br/> individuals to achieve their goals and thrive in their careers. Join our growing community of learners and discover<br/> a world of knowledge tailored just for you!</p>
      </div>
      <div className='flex flex-row  items-center justify-center  relative bottom-70 gap-18'>
        <img src={one} alt="" className="src" />
        <img src={two} alt="" className="src" />
        <img src={one} alt="" className="src" />
        <img src={two} alt="" className="src" />
      </div>
      <div className='flex flex-col ml-20'>
        <h1 className='text-4xl font-extrabold pb-4'>Mission</h1>
        <p className='font-medium'>To empower individuals through accessible, high-quality education that<br/> fosters personal growth, professional development, and lifelong learning. <br/>We aim to break barriers to education by delivering innovative, engaging,<br/> and practical learning experiences to learners worldwide.</p>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default AboutUs
