import about from '../../assets/images/about.png'

const AboutUs = () => {
  return (
    <div>
      <div className='flex flex-col flex-wrap'>
        <img src={about} alt="" />
        <source />
       <h1 className='text-4xl text-white font-extrabold relative bottom-100 text-center'>About Us</h1>
       <p className=' text-xl text-white font-medium relative bottom-90 text-center'>Welcome to S.T. Tech, where learning meets innovation. Our mission is to make quality education accessible to <br/>everyone, everywhere. With a wide range of expert-designed courses and interactive learning tools, we empower<br/> individuals to achieve their goals and thrive in their careers. Join our growing community of learners and discover<br/> a world of knowledge tailored just for you!</p>
      </div>
      <div className='flex flex-row gap-'>

      </div>
    </div>
  )
}

export default AboutUs
